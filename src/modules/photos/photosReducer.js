import PhotosState from './photosState';
import * as types from '../../configs/actionTypes';
import Immutable, { Record, List } from 'immutable';

const photosState = new PhotosState();
export default function photosReducer(state = photosState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
             return state.set('isLogin', true);
        case types.LOGIN_FAILURE:
             return state.set('isLogin', false);
        default: 
             return state;
    }
}