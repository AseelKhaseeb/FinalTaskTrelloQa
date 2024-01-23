Feature: Check update template name functionality

    The user can update template name successfully
    Scenario: Verify that the user can update template name successfully
        Given The user navigated to board
        When Clicks on template card name anchor
        And Clicks on template card name textarea
        And Enters a new title for the template card
        And Clicks on close anchor
        Then Checks that template card name updated successfully