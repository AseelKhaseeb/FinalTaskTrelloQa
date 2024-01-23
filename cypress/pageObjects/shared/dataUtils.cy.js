import {APIKEY, APITOKEN} from '../../support/constants.cy'

class SharedDataUtils {
    createNewBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKEY}&token=${APITOKEN}`)
    }
}

export default SharedDataUtils