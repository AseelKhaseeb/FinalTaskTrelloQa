import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import CreateNewCardActions from "../../../pageObjects/createNewCard/actions.cy";
import CreateNewCardAssertions from "../../../pageObjects/createNewCard/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()
const createNewCardActions = new CreateNewCardActions()
const createNewCardAssertions = new CreateNewCardAssertions()

const boardName = "CypressBoard"
const cardTitle = "CardBoard"

Before(()=>{
    sharedActions.loginToTrelloWebsite()
    sharedDataUtils.createNewBoard(boardName).as("boardResponse")
})

Given("The user navigated to board",()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedActions.openBoard(data.body.url)
    })
})

When("Clicks on Add a card button",()=>{
    createNewCardActions.clickOnAddACartButton()
})

When("Enters a title for the card",()=>{
    createNewCardActions.typeTitleForTheCard(cardTitle)
})
 
When("Clicks on Add card button",()=>{
    createNewCardActions.clickOnAddCardButton()
})

Then("A new card will be created",()=>{
    createNewCardAssertions.checkCardIsExist()
    createNewCardAssertions.checkCardIsContain(cardTitle)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 