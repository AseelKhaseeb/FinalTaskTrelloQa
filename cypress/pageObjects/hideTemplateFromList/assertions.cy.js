class HideTemplateFromListAssertions{
    checksThatTemplateCardHiddenSuccessfully(){
        cy.get("[data-testid='list-cards']").first().should("be.empty")
    }
}

export default HideTemplateFromListAssertions