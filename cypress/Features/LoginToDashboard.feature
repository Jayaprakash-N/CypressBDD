Feature: Login To Dashboard

    Scenario: Login to Dashboard with Valid Credentials

        Given the user navigates to login page from guest Dashboard
        When the user provides valid credentials and submit to Login
        Then the user should see the User Dashboard

    Scenario: Login to Dashboard with Invalid Credentials

        Given the user navigates to login page from guest Dashboard
        When the user provides Invalid credentials and submit to Login
        Then the user should see the error message in Login screen