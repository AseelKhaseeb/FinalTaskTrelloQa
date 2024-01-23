class DeleteCardAssertions {
    checksThatCardDeletedSuccessfully(cardName){
        cy.get("input.js-search").clear().type(cardName+"{enter}")
        cy.get(".empty-list").should("contain","No results")
    }
}

export default DeleteCardAssertions