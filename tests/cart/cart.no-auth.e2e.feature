Feature: Authenticated user permissions
  Scenario: Check that order page is not accessible without authentication
    When I go to the /order page
    Then I should see the /notfound page

  Scenario: Check that order page is accessible with authentication
    Given I am on the /auth/login page
    Then I should see the /auth/login page
    When I press button "Login"
    Then I should see the /home page
    When I go to the /order page
    Then I should see the /order page