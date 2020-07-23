import {ADD_ORDER, REMOVE_ORDER} from '../types';

export const addOrder = (data) => {
  return {
    type: ADD_ORDER,
    payload: data,
  };
};

export const removeOrder = (data) => {
  return {
    type: REMOVE_ORDER,
    payload: data,
  };
};
