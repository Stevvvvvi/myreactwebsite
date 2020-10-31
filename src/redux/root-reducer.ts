import userReducer  from './user/user.reducer';
import {combineReducers} from 'redux';


export default combineReducers({
    user: userReducer
});

export interface ReducerStateProps{
    currentUser:any
}

