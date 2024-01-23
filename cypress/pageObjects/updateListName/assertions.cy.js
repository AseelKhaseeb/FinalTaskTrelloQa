class UpdateListNameAssertions {
    checkListIsContainValue(listTitle){
        cy.get("[data-testid='list-name-textarea']").first().should("contain",listTitle)
    }
}

export default UpdateListNameAssertions