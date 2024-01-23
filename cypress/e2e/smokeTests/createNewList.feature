Feature: Check create a new list functionality

    The user can create a new list successfully
    Scenario: Verify that the user can create a new list successfully
        Given The user navigated to board
        When Clicks on Add another list
        And Enters a title for the list
        And Clicks on Add list button
        Then A new list will be created