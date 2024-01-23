import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SharedActions from '../../../pageObjects/shared/actions.cy'
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import MoveTemplateToListActions from "../../../pageObjects/moveTemplateToList/actions.cy";
import MoveTemplateToListAssertions from "../../../pageObjects/moveTemplateToList/assertions.cy";

const sharedActions = new SharedActions()
const sharedDataUtils = new SharedDataUtils()

const boardName = "CypressBoard"
const templateCardName = "TemplateCardBoard"
const moveTemplateToListActions = new MoveTemplateToListActions()
const moveTemplateToListAssertions = new MoveTemplateToListAssertions()

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
    moveTemplateToListActions.clicksOnTemplateCardNameAnchor()
})

When("Clicks on move anchor",()=>{
    moveTemplateToListActions.clicksOnMoveAnchor()
})

When("Select Doing list",()=>{
    moveTemplateToListActions.selectDoingList()
})

When("Clicks on Move input",()=>{
    moveTemplateToListActions.clicksOnMoveInput()
})

When("Clicks on close anchor",()=>{
    moveTemplateToListActions.clicksOnCloseAnchor()
})

Then("Checks that template card moved successfully",()=>{
    moveTemplateToListAssertions.checksThatTemplateCardMovedSuccessfully(templateCardName)
})

After(()=>{
    cy.get("@boardResponse").then((data)=>{
        sharedDataUtils.deleteBoard(data.body.id)
    })
}) 