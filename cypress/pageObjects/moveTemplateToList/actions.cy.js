class MoveTemplateToListActions{
    clicksOnTemplateCardNameAnchor(){
        cy.get("[data-testid='card-name']").click()
        cy.wait(2000)
    }

    clicksOnMoveAnchor(){
        cy.get(".js-move-card").click()
    }

    selectDoingList(){
        cy.get("[data-testid='move-card-popover-select-list-destination']").select("Doing")
    }

    clicksOnMoveInput(){
        cy.get("[data-testid='move-card-popover-move-button']").click()
    }

    clicksOnCloseAnchor(){
        cy.get(".js-close-window").click()
    }
}

export default MoveTemplateToListActions