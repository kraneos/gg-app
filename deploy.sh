#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH_STAGING="staging"
SOURCE_BRANCH_MASTER="master"

TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" ] || ([ "$TRAVIS_BRANCH" != "$SOURCE_BRANCH_STAGING" ] && [ "$TRAVIS_BRANCH" != "$SOURCE_BRANCH_MASTER" ]); then
  echo "Skipping deploy; just doing a build."
  exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

if [ "$TRAVIS_BRANCH" == "$SOURCE_BRANCH_STAGING" ]; then
  echo "Deploy to Staging"

  # Clone the existing gh-pages for this repo into out/
  # Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
  # git clone $TARGET_REPO_STAGING out
  git clone $TOKEN_TARGET_REPO_STAGING out
  cd out
  git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

  ls -l
  # git rm . -r || exit 0
  find . -name '*.html' -exec git rm -r {} \;
  find . -name '*.js' -exec git rm -r {} \;
  find . -name '*.css' -exec git rm -r {} \;
  find . -name '*.gz' -exec git rm -r {} \;

  cp id_rsa_travis.enc ../id_rsa_travis.enc

  cd ..

  # Clean out existing contents

  # Run our compile script
  npm run deploy-staging

  # Now let's go have some fun with the cloned repo
  cp id_rsa_travis.enc out/id_rsa_travis.enc
  cd out
  ls -l
  git remote -v
  git config user.name "Travis CI"
  git config user.email "$COMMIT_AUTHOR_EMAIL"

  # If there are no changes to the compiled out (e.g. this is a README update) then just bail.
  # if [ -z `git diff --exit-code` ]; then
  #     echo "No changes to the output on this push; exiting."
  #     exit 0
  # fi

  # Commit the "changes", i.e. the new version.
  # The delta will show diffs between new and old versions.
  git add .
  git commit -m "Deploy to GitHub Pages: ${SHA}"

  # Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
  ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
  ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
  ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
  ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
  # openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in id_rsa_travis.enc -out id_rsa_travis -d
  # chmod 600 id_rsa_travis
  # eval `ssh-agent -s`
  # ssh-add id_rsa_travis

  # Now that we're all set up, we can push.
  # git push $SSH_TARGET_REPO $TARGET_BRANCH
  git push origin $TARGET_BRANCH

fi

if [ "$TRAVIS_BRANCH" == "$SOURCE_BRANCH_MASTER" ]; then
  echo "Deploy to Master"

  npm run deploy-prod

  exit 0

fi
