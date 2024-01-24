Feature: Check delete card functionality

    The user can delete card successfully
    Scenario: Verify that the user can delete card successfully
        Given The user navigated to board
        When Clicks on pen Icon button
        And Clicks on Archive button
        And Clicks on three dots button
        And Clicks on Archived items anchor
        And Clicks on delete anchor
        And Clicks on delete input
        Then Checks that card deleted successfully