import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';
import getAppState from './initialState';

const createStoreWithMiddleware = applyMiddleware(thunk) (createStore);

function configureStore (initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
var appStore=configureStore(getAppState());
export default appStore;