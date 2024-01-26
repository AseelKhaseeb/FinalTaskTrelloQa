class SharedActions{
    openTrelloWebsite(){
        return cy.visit("https://trello.com/login")
    }

    loginToTrelloWebsite(){
        this.openTrelloWebsite()
        cy.login()
        return this
    }

    openBoard(boardUrl){
        return cy.visit(boardUrl)
    }

    // visitTrelloWebsite(){
    //     return cy.visit("https://trello.com/u/aseelkhaseeb2/boards")
    // }
}

export default SharedActions