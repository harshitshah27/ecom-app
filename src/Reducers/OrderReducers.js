import {ADD_ORDER, REMOVE_ORDER} from '../types';

const initialState = {
  data: [],
};

export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case REMOVE_ORDER:
      return {
        ...state,
        data: state.data.filter(
          (item) => item.productId !== action.payload.productId,
        ),
      };
    default:
      return state;
  }
};
