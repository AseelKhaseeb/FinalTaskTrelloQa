import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import HideTemplateFromListActions from "../../../pageObjects/hideTemplateFromList/actions.cy";
import HideTemplateFromListAssertions from "../../../pageObjects/hideTemplateFromList/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()
const hideTemplateFromListActions = new HideTemplateFromListActions()
const hideTemplateFromListAssertions = new HideTemplateFromListAssertions()

const boardName = "CypressBoard"
const templateCardName = "TemplateCardBoard"

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
        let firstListID = data.body[0].id
        sharedDataUtils.createTemplate(firstListID,templateCardName)
    })
})

When("Clicks on template card name anchor",()=>{
    hideTemplateFromListActions.clicksOnTemplateCardNameAnchor()
})

When("Clicks on hide from list anchor",()=>{
    hideTemplateFromListActions.clicksOnHideFromListAnchor()
})

When("Clicks on close anchor",()=>{
    hideTemplateFromListActions.clicksOnCloseAnchor()
})

Then("Checks that template card hidden successfully",()=>{
    hideTemplateFromListAssertions.checksThatTemplateCardHiddenSuccessfully()
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 