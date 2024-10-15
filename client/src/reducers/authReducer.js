import { FETCH_USER } from "../actions/types"

export default function(state=null,action){
    
    switch(action.type){
        case FETCH_USER:
            return action.payload || false
        default:
            return state //no clue whether the user is logged in or not , this will return state
    }
}