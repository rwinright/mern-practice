import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const initialState = {};

const middleWare = [thunk];

//New way of using compose
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleWare)
));

export default store