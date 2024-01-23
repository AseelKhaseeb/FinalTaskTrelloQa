class MoveTemplateToListAssertions{
    checksThatTemplateCardMovedSuccessfully(templateCardName){
        cy.get("[data-testid='list'] > ol li [data-testid='trello-card'] div a").should("contain",templateCardName)
    }
}

export default MoveTemplateToListAssertions