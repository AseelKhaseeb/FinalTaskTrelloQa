class CreateListActions {
    clickOnAddAnotherList(){
        cy.get("[data-testid='list-composer-button']").click()
    }

    typeTitleForTheList(listTitle){
        cy.get("[data-testid='list-name-textarea']").last().clear().type(listTitle)
    }

    clickOnAddListButton(){
        cy.get("[data-testid='list-composer-add-list-button']").click()
    }
}

export default CreateListActions