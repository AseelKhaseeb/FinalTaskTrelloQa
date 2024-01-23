class CreateTemplateCardAssertions {
    checksThatTemplateCardCreatedSuccessfully(cardName){
        cy.get("[data-testid='card-name']").should("contain",cardName)
    }
}

export default CreateTemplateCardAssertions