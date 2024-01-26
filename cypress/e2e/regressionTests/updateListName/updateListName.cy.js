
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
// const listName = ["NewListBoard0","NewListBoard1","NewListBoard3"]
// const listName = "NewListBoard"+Math.floor(Math.random()*10)
// let boardUrl

// before(()=>{
//     sharedActions.loginToTrelloWebsite()
//     sharedDataUtils.createNewBoard(boardName).as("boardResponse")
//     cy.get("@boardResponse").then((data)=>{
//         boardUrl = data.body.url
//     })
// })

Before(()=>{
    // sharedActions.visitTrelloWebsite()
    sharedActions.loginToTrelloWebsite()
    sharedDataUtils.createNewBoard(boardName).as("boardResponse")
})

Given("The user navigated to board",()=>{
    // sharedActions.openBoard(boardUrl)
    cy.get("@boardResponse").then((data)=>{
        sharedActions.openBoard(data.body.url)
    })
})

When("Clicks on list name and Enters a new title for the list",()=>{
    updateListNameActions.clickOnListNameAndtypeNewTitle(listName)
})

// When("Clicks on list name",()=>{
//     updateListNameActions.clickOnListName(index)
// })

// When("Enters a new title for the list",()=>{
//     updateListNameActions.typeNewTitleForTheList(listName,index)
// })

Then("A new title will be created",()=>{
    updateListNameAssertions.checkListIsContainValue(listName)
})

// Given("The user navigated to board",()=>{
//     // sharedActions.openBoard(boardUrl)
//     cy.get("@boardResponse").then((data)=>{
//         sharedActions.openBoard(data.body.url)
//     })
// })

// When("Clicks on list name {string}",(index)=>{
//     updateListNameActions.clickOnListName(index)
// })

// When("Enters a new title for the list {string}",(index)=>{
//     updateListNameActions.typeNewTitleForTheList(listName,index)
// })

// Then("A new title will be created {string}",(index)=>{
//     updateListNameAssertions.checkListIsContainValue(listName,index)
// })

// After(()=>{
//     cy.get("@boardResponse").then((data)=>{
//         sharedDataUtils.deleteBoard(data.body.id)
//     })
// }) 