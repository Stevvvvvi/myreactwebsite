import { UserActionTypes } from "./user.types";

export interface AuthUser{
    id:string,
    displayName?:string,
    email?:string,
    createAt?:Date
}
export interface UserState{
    currentUser:AuthUser | null
}

const INITIAL_STATE:UserState={
    currentUser:null
}

const userReducer=(state=INITIAL_STATE,action: { type: any; payload: any; }):UserState=>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}
export default userReducer;