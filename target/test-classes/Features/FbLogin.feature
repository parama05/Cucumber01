Feature: Validation of login page in Facebook Web Application

  Background: 
    Given User launch Facebook Web Application

  Scenario: TC01_Validation of login page with valid username and invalid password
    When User enters valid username and invalid password
    And User clicks login Button
    Then User verify Error message is displayed

  Scenario: TC02_Validation of Signup text
    When User clicks Create New Account Button
    Then User verify Signup text is displayed

  Scenario Outline: TC03_Validation of login page with multiple invalid credentials
    When User enters invalid "<username>" and "<password>"
    And User clicks login Button
    Then User verify Error message is displayed

    Examples: 
      | username   | password |
      | 9655145848 |    12455 |
