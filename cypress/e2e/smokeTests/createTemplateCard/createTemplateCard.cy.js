import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import CreateTemplateCardActions from "../../../pageObjects/createTemplateCard/actions.cy";
import CreateTemplateCardAssertions from "../../../pageObjects/createTemplateCard/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()
const createTemplateCardActions = new CreateTemplateCardActions()
const createTemplateCardAssertions = new CreateTemplateCardAssertions()

const boardName = "CypressBoard"
const templateCardName = "TemplateCardBoard"

Before(()=>{
    sharedActions.loginToTrelloWebsite()
    sharedDataUtils.createNewBoard(boardName).as("boardResponse")
})

Given("The user navigated to board",()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedActions.openBoard(data.body.url)
    })
})

When("Clicks on template card icon button",()=>{
    createTemplateCardActions.clicksOnTemplateCardIconButton()
})

When("Clicks on Create a new template button",()=>{
    createTemplateCardActions.clicksOnCreateANewTemplateButton()
})

When("Enters a title for the template card",()=>{
    createTemplateCardActions.typeTitleForTheTemplateCard(templateCardName)
})

When("Clicks on Add button",()=>{
    createTemplateCardActions.clicksOnAddButton()
})

When("Clicks on close anchor",()=>{
    createTemplateCardActions.clicksOnCloseAnchor()
})

Then("Checks that template card created successfully",()=>{
    createTemplateCardAssertions.checksThatTemplateCardCreatedSuccessfully(templateCardName)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 