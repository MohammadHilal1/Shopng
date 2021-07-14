import { userActionTypes } from "./user.types"
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.Set_Current_User:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state
    }
}

export default userReducer