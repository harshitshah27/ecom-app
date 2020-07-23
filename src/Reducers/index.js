import {combineReducers} from 'redux';
import {orderReducer} from './OrderReducers';
console.log('In rootreducer [index.js]');

export default combineReducers({
  order: orderReducer,
});
