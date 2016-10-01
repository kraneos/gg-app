set mypath=%cd%
cd ..
call git clone https://github.com/kraneos/gg-app-staging
cd gg-app-staging
call git checkout gh-pages
call git rm . -r
cd %mypath%
call npm run deploy-staging
move .\dist\*.* ..\gg-app-staging
rd /s dist
cd ..\gg-app-staging
call git add .
call git commit . -m "deploy a staging."
call git push origin gh-pages
cd ..
rd /s gg-app-staging
cd %mypath%
