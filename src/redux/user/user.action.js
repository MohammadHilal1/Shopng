import { userActionTypes } from "./user.types"

export const setCurrentUser = user => ({
    type: userActionTypes.Set_Current_User,
    payload: user
})