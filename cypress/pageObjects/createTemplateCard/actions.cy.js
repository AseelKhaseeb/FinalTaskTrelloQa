class CreateTemplateCardActions {
    clicksOnTemplateCardIconButton(){
        cy.get("[data-testid='card-template-list-button']").first().click()
    }

    clicksOnCreateANewTemplateButton(){
        cy.get("[data-testid='create-new-template-card-button']").click()
    }

    typeTitleForTheTemplateCard(templateCardName){
        cy.get("[data-testid='create-template-card-composer']").clear().type(templateCardName)
    }

    clicksOnAddButton(){
        cy.get("[data-testid='new-template-card-submit-button']").click()
        cy.wait(1000)
    }

    clicksOnCloseAnchor(){
        cy.get(".window-wrapper > a").click()
    }
}

export default CreateTemplateCardActions