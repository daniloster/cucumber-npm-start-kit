Feature: Example feature
    As a user of Cucumber.js
    I want to make a pilot project for testing
    So that I can build my projects based on this template

    Scenario: Suming 2 and 7
        Given I have created my calculator
        And it has been cleared
        When I sum 2 and 7
        Then I should get 9 as result
    
    Scenario: Multipling 2 and 7
        Given I have created my calculator
        And it has been cleared
        When I multiple 2 and 7
        Then I should get 14 as result
    
    Scenario: Subtracting 2 and 7
        Given I have created my calculator
        And it has been cleared
        When I subtract 2 and 7
        Then I should get -5 as result
    
    Scenario: Dividing 10 and 2
        Given I have created my calculator
        And it has been cleared
        When I divide 10 and 2
        Then I should get 5 as result
    
    Scenario: Dividing 10 and 2 then multipling by 3
        Given I have created my calculator
        And it has been cleared
        When I divide 10 and 2
        And I multiple the result by 3
        Then I should get 15 as result
