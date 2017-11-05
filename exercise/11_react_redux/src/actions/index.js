import shop from '../api/shop';
// import {
//   RECEIVE_PRODUCTS,
// } from '../constants/ActionTypes';

import * as types from '../constants/ActionTypes';

export const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const addToCart = id => ({
  type: types.ADD_TO_CART,
  id,
});

export const checkout = () => ({
  type: types.CHECKOUT_SUCCESS,
});

// 非同步
export const getAllProducts = () =>
  (dispatch) => {
    shop.getProducts().then((products) => {
      dispatch(receiveProducts(products));
    });
  };
