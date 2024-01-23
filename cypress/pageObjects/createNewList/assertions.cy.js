class CreateListAssertions {
    checkListIsExist(){
        cy.get("[data-testid='list-name-textarea']").contains("ListBoard").should("be.exist")
    }

    checkListIsContainValue(listTitle){
        cy.get("[data-testid='list-name-textarea']").contains("ListBoard").should("contain",listTitle)
    }
}

export default CreateListAssertions