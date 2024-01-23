Feature: Check hide template from list functionality

    The user can hide template from list successfully
    Scenario: Verify that the user can hide template from list successfully
        Given The user navigated to board
        When Clicks on template card name anchor
        And Clicks on hide from list anchor
        And Clicks on close anchor
        Then Checks that template card hidden successfully