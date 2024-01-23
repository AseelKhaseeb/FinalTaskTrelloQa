Feature: Check update list name functionality

    The user can update list name successfully
    Scenario: Verify that the user can update list name successfully
        Given The user navigated to board
        When Clicks on list name
        And Enters a new title for the list
        Then A new title will be created