import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import UpdateListNameActions from "../../../pageObjects/updateListName/actions.cy";
import UpdateListNameAssertions from "../../../pageObjects/updateListName/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()
const updateListNameActions = new UpdateListNameActions()
const updateListNameAssertions = new UpdateListNameAssertions()

const boardName = "CypressBoard"
const listName = "NewListBoard"

Before(()=>{
    sharedActions.loginToTrelloWebsite()
    sharedDataUtils.createNewBoard(boardName).as("boardResponse")
})

Given("The user navigated to board",()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedActions.openBoard(data.body.url)
    })
})

When("Clicks on list name",()=>{
    updateListNameActions.clickOnListName()
})

When("Enters a new title for the list",()=>{
    updateListNameActions.typeNewTitleForTheList(listName)
})

Then("A new title will be created",()=>{
    updateListNameAssertions.checkListIsContainValue(listName)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 