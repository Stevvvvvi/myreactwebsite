import { UserActionTypes } from "./user.types"

export const setCurrentUser=(user: any) =>{
    return {
        type:UserActionTypes.SET_CURRENT_USER,
        payload: user,
    }
}