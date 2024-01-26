
class UpdateListNameActions {
    // for (let index = 0; index < 3; index++) {
    //     clickOnListName(index){
    //         cy.get("[data-testid='list-name-textarea']").eq(index).click({force:true})
    //     }

    //     typeNewTitleForTheList(listTitle,index){
    //         cy.get("[data-testid='list-name-textarea']").eq(index).clear().type(listTitle+index+"{enter}")
    //     }
    // }

    clickOnListNameAndtypeNewTitle(listTitle){
        for (let index = 0; index < 3; index++) {
            cy.get("[data-testid='list-name-textarea']").eq(index).click({force:true})
            cy.get("[data-testid='list-name-textarea']").eq(index).clear().type(listTitle+index+"{enter}")
        }
    }
}

export default UpdateListNameActions