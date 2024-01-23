Feature: Check create template functionality

    The user can create template successfully
    Scenario: Verify that the user can create template successfully
        Given The user navigated to board
        When Clicks on template card icon button
        And Clicks on Create a new template button
        And Enters a title for the template card
        And Clicks on Add button
        And Clicks on close anchor
        Then Checks that template card created successfully