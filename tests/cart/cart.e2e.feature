Feature:
  Background:
    Given I am on the /auth/login page
    Then I should see the /auth/login page
    When I press button "Login"
    Then I should see the /home page

  Scenario: Add a product to the cart
    When I go to the /menu page
    Then I should see the /menu page
    When I add first product to the cart
    Then The product quantity in the cart should be 1

  Scenario: Increase product quantity in the cart
    When I go to the /menu page
    Then I should see the /menu page
    When I add first product to the cart
    Then The product quantity in the cart should be 1
    When I add first product to the cart
    Then The product quantity in the cart should be 2

  Scenario: Decrease product quantity in the cart
    When I go to the /menu page
    Then I should see the /menu page
    When I add first product to the cart
    Then The product quantity in the cart should be 1
    When I reduce first product in the cart
    Then The product quantity in the cart should be 0