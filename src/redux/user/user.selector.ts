import {createSelector} from 'reselect';
import { rootState } from '../root-reducer';

const selectUser=(state:rootState)=>state.user;

export const selectCurrentUser=createSelector(
    [selectUser],
    (user)=>user.currentUser
)