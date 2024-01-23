import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import UpdateTemplateNameActions from "../../../pageObjects/updateTemplateName/actions.cy";
import UpdateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()

const boardName = "CypressBoard"
const templateCardName = "TemplateCardBoard"
const newTemplateCardName = "TemplateCardBoard"+Math.floor(Math.random()*10)
const updateTemplateNameActions = new UpdateTemplateNameActions()
const updateTemplateNameAssertions = new UpdateTemplateNameAssertions()

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
        sharedDataUtils.createTemplate(listID,templateCardName)
    })
})

When("Clicks on template card name anchor",()=>{
    updateTemplateNameActions.clicksOnTemplateCardNameAnchor()
})

When("Clicks on template card name textarea",()=>{
    updateTemplateNameActions.clicksOnTemplateCardNameTextarea()
})

When("Enters a new title for the template card",()=>{
    updateTemplateNameActions.entersANewTitleForTheTemplateCard(newTemplateCardName)
})

When("Clicks on close anchor",()=>{
    updateTemplateNameActions.clicksOnCloseAnchor()
})

Then("Checks that template card name updated successfully",()=>{
    updateTemplateNameAssertions.checksThatTemplateCardNameUpdatedSuccessfully(newTemplateCardName)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 