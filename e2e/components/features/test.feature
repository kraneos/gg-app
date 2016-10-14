#features/test.feature
Feature: Login Functionality Feature
    As a user of Seggu
    I should be able to login
    In order to access Seggu

    Scenario: Login Functionality
        Given I go to "https://localhost:4200/login"
        When I add "usuario" in the user field
        And "usuario" in the password field
        And I click the login button
        Then I should be redirected to policies page

    Scenario: Login Functionality
        Given user navigates to "https://localhost:4200/login"
        When user logs in using usuario as “USER”
        And usuario as “password”
        Then login should be successful
        And Policies page should be displayed

    Scenario: Login Functionality fail
        Given user navigates to "https://localhost:4200/login"
        When user logs in using asd as “USER”
        And asd as “password”
        Then error message should be thrown
        And Login page should be displayed
