class HideTemplateFromListActions{
    clicksOnTemplateCardNameAnchor(){
        cy.get("[data-testid='card-name']").click()
    }

    clicksOnHideFromListAnchor(){
        cy.get(".u-clearfix > a[title='Archive']").contains("Hide from list").click()
    }

    clicksOnCloseAnchor(){
        cy.get(".js-close-window").click()
    }
}

export default HideTemplateFromListActions