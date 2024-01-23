Feature: Check move template to list functionality

    The user can move template to list successfully
    Scenario: Verify that the user can move template to list successfully
        Given The user navigated to board
        When Clicks on template card name anchor
        And Clicks on move anchor
        And Select Doing list
        And Clicks on Move input
        And Clicks on close anchor
        Then Checks that template card moved successfully