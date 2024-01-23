class CreateNewCardAssertions{
    checkCardIsExist(){
        cy.get("[data-testid='card-name']").should("be.exist")
    }
    
    checkCardIsContain(cardTitle){
        cy.get("[data-testid='card-name']").should("contain",cardTitle)
    }
}

export default CreateNewCardAssertions