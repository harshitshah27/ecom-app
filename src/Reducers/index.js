import {combineReducers} from 'redux';
import {orderReducer} from './OrderReducers';

export default combineReducers({
  order: orderReducer,
});
