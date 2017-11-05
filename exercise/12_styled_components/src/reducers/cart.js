import {
  ADD_TO_CART,
  CHECKOUT_SUCCESS,
} from '../constants/ActionTypes';

const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const quantity = state[action.id] || 0;
      return {
        ...state,
        [action.id]: quantity + 1,
      };
    }
    case CHECKOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default cart;
