class UpdateTemplateNameActions{
    clicksOnTemplateCardNameAnchor(){
        cy.get("[data-testid='card-name']").click()
    }

    clicksOnTemplateCardNameTextarea(){
        cy.get(".window-title textarea").click()
    }

    entersANewTitleForTheTemplateCard(newTemplateCardName){
        cy.wait(1000)
        cy.get(".window-title textarea").clear().type(newTemplateCardName)
    }

    clicksOnCloseAnchor(){
        cy.get(".js-close-window").click()
    }
}

export default UpdateTemplateNameActions