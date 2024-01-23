class CreateNewCardActions{
    clickOnAddACartButton(){
        cy.get("[data-testid='list-add-card-button']").first().click()
    }

    typeTitleForTheCard(cardTitle){
        cy.get("[data-testid='list-card-composer-textarea']").clear().type(cardTitle)
    }

    clickOnAddCardButton(){
        cy.get("[data-testid='list-card-composer-add-card-button']").click()
    }
}

export default CreateNewCardActions