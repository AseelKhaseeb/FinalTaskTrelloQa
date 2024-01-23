class DeleteCardActions {
    clickOnPenIcon(){
        cy.get("[data-testid='quick-card-editor-button']").click({force:true})
    }

    clickOnArchiveButton(){
        cy.get("[data-testid='quick-card-editor-buttons'] > button").contains("Archive").click()
    }

    clicksOnThreeDotsButton(){
        cy.get(".GDunJzzgFqQY_3 [data-testid='OverflowMenuHorizontalIcon']").parent().parent().click()
    }

    clicksOnArchivedItemsAnchor(){
        cy.get(".board-menu-navigation li").eq(3).find("a").click()
    }

    clicksOnDeleteAnchor(cardName){
        cy.get(".archived-list-card").contains(cardName).siblings().find("a").eq(1).click()
    }

    clicksOnDeleteInput(){
        cy.get("input[value='Delete']").click()
    }
}

export default DeleteCardActions