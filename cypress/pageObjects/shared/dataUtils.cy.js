import {APIKEY, APITOKEN} from '../../support/constants.cy'

class SharedDataUtils {
    createNewBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKEY}&token=${APITOKEN}`)
    }

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKEY}&token=${APITOKEN}`)
    }

    getListsOfBoard = (boardId)=>{
        return cy.request(`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKEY}&token=${APITOKEN}`,{header: "Accept: application/json"})
    }

    createNewCard = (listId,cardName)=>{
        return cy.request({
            method: "POST",
            url: `https://api.trello.com/1/cards?idList=${listId}&key=${APIKEY}&token=${APITOKEN}`,
            header: "Accept: application/json",
            body: {name: cardName}
        })
    }
}

export default SharedDataUtils