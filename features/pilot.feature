Feature: Example feature
    As a cashier
    I want to make basic math operations with calculator
    So that I do not need to waste time suming, subtracting, multipling, dividing

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
    
    Scenario: Subtracting 2 and 7 then dividing by 5
        Given I have created my calculator
        And it has been cleared
        When I subtract 2 and 7
        And I divide the result by 5
        Then I should get -1 as result
    
    Scenario: Multipling 2 and 7 then suming with 7 and subtracting 3
        Given I have created my calculator
        And it has been cleared
        When I multiple 2 and 7
        And I sum the result with 7
        And I subtract 3 from the result
        Then I should get 18 as result
