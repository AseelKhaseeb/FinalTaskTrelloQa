class UpdateListNameActions {
    clickOnListName(){
        cy.get("[data-testid='list-name-textarea']").first().click({force:true})
    }

    typeNewTitleForTheList(listTitle){
        cy.get("[data-testid='list-name-textarea']").first().clear().type(listTitle+"{enter}")
    }
}

export default UpdateListNameActions