import { AuthUser } from "./user.reducer"
import { UserActionTypes } from "./user.types"

export const setCurrentUser=(user: AuthUser) =>{
    return {
        type:UserActionTypes.SET_CURRENT_USER,
        payload: user,
    }
}