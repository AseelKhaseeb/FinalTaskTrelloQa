import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import CreateListActions from "../../../pageObjects/createNewList/actions.cy";
import CreateListAssertions from "../../../pageObjects/createNewList/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()
const createListActions = new CreateListActions()
const createListAssertions = new CreateListAssertions()

const boardName = "CypressBoard"
const listName = "ListBoard"

Before(()=>{
    sharedActions.loginToTrelloWebsite()
    sharedDataUtils.createNewBoard(boardName).as("boardResponse")
})

Given("The user navigated to board",()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedActions.openBoard(data.body.url)
    })
})

When("Clicks on Add another list",()=>{
    createListActions.clickOnAddAnotherList()
})

When("Enters a title for the list",()=>{
    createListActions.typeTitleForTheList(listName)
})
 
When("Clicks on Add list button",()=>{
    createListActions.clickOnAddListButton()
})

Then("A new list will be created",()=>{
    createListAssertions.checkListIsExist()
    createListAssertions.checkListIsContainValue(listName)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 