import photos from '../modules/photos/photosReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    photos
    //...
});
export default appReducer;