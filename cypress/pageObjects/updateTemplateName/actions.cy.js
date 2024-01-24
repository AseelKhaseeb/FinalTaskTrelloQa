class UpdateTemplateNameActions{
    clicksOnTemplateCardNameAnchor(){
        cy.get("[data-testid='card-name']").click()
    }

    clicksOnTemplateCardNameTextarea(){
        cy.get(".window-title textarea").click()
    }

    entersANewTitleForTheTemplateCard(newTemplateCardName){
        cy.get(".window-title textarea").clear().type(newTemplateCardName)
        cy.wait(1000)
    }

    clicksOnCloseAnchor(){
        cy.get(".js-close-window").click()
    }
}

export default UpdateTemplateNameActions