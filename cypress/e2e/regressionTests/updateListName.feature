Feature: Check update list name functionality

    The user can update list name successfully
    # Background: visit the site
    #     Given The user navigated to board
    Scenario: Verify that the user can update list name successfully
        Given The user navigated to board
        When Clicks on list name and Enters a new title for the list
        # And Enters a new title for the list
        Then A new title will be created

    # Scenario Outline: Verify that the user can update list name successfully
    #     Given The user navigated to board
    #     When Clicks on list name "<index>"
    #     And Enters a new title for the list "<index>"
    #     Then A new title will be created "<index>"

    #     Examples: 
    #         | index |
    #         | 0     |
    #         | 1     |
    #         | 2     |