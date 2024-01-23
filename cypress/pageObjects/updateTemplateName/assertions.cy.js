class UpdateTemplateNameAssertions{
    checksThatTemplateCardNameUpdatedSuccessfully(newTemplateCardName){
        cy.get("[data-testid='card-name']").should("contain",newTemplateCardName)
    }
}

export default UpdateTemplateNameAssertions