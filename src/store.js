import {createStore, applyMiddleware, compose} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {orderReducers} from './Reducers/OrderReducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk, logger];

const store = createStore(
  orderReducers,
  compose(composeWithDevTools(applyMiddleware(...middleware))),
);

export default store;
