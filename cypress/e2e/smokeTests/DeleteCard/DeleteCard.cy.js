import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import DeleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import DeleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()
const deleteCardActions = new DeleteCardActions()
const deleteCardAssertions = new DeleteCardAssertions()

const boardName = "CypressBoard"
const cardName = "CardBoard"

Before(()=>{
    sharedActions.loginToTrelloWebsite()
    sharedDataUtils.createNewBoard(boardName).as("boardResponse")
})

Given("The user navigated to board",()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedActions.openBoard(data.body.url)
        sharedDataUtils.getListsOfBoard(data.body.id).as("boardListsResponse")
    })
    cy.get("@boardListsResponse").then((data)=>{
        let listID = data.body[0].id
        sharedDataUtils.createNewCard(listID,cardName)
    })
})

When("Clicks on pen Icon button",()=>{
    deleteCardActions.clickOnPenIcon()
})

When("Clicks on Archive button",()=>{
    deleteCardActions.clickOnArchiveButton()
})

When("Clicks on three dots button",()=>{
    deleteCardActions.clicksOnThreeDotsButton()
})

When("Clicks on Archived items anchor",()=>{
    deleteCardActions.clicksOnArchivedItemsAnchor()
})

When("Clicks on delete anchor",()=>{
    deleteCardActions.clicksOnDeleteAnchor(cardName)
})

When("Clicks on delete input",()=>{
    deleteCardActions.clicksOnDeleteInput()
})

Then("Checks that card deleted successfully",()=>{
    deleteCardAssertions.checksThatCardDeletedSuccessfully(cardName)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 