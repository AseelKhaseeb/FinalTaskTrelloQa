class UpdateListNameAssertions {
    checkListIsContainValue(listTitle){
        // cy.wait(2000)
        for (let index = 0; index < 3; index++) {
            cy.get("[data-testid='list-name-textarea']").eq(index).should("contain",listTitle+index)
        }
    }
    
}

export default UpdateListNameAssertions