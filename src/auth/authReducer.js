import { types } from "../types/types";

// const state = {

// }


export const authReducer = (state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                ...action.payload
        
            }
            
            case types.logout:
                return {
                    logged: false
                }
    
        default:
            return state;
    }
}