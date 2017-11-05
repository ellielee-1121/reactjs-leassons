import * as types from '../constants/ActionTypes';

const product = (state = {}, action) => {
  if (state.id !== action.id) return state;

  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return action.products;
    case types.ADD_TO_CART:
      return state.map(p => product(p, action));
    default:
      return state;
  }
};

export default products;
