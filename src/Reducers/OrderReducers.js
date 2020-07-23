import {ADD_ORDER} from '../types';

const initialState = {
  loading: false,
};

console.log('in student reducer');
export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
