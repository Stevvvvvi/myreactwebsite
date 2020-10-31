import { AuthUser, UserState } from "./user.reducer"
import { UserActionTypes } from "./user.types"

export const setCurrentUser=(user: UserState) =>{
    return {
        type:UserActionTypes.SET_CURRENT_USER,
        payload: user,
    }
}
// export const setUserSignOut=(user:AuthUser)=>{
//     return {
//         type:UserActionTypes.SET_CURRENT_USER,
//         payload:user,
//     }
// }