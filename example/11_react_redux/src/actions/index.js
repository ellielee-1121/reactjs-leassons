import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  shop.getProducts().then(products =>
    dispatch(receiveProducts(products)),
  );
};

const addToCartUnsafe = id => ({
  type: types.ADD_TO_CART,
  id,
});

export const addToCart = id => (dispatch, getState) => {
  const product = getState().products.filter(p => p.id === id)[0];
  if (product.inventory > 0) {
    dispatch(addToCartUnsafe(id));
  }
};

export const checkout = products => (dispatch) => {
  shop.buyProducts(products)
    .then(() => dispatch({ type: types.CHECKOUT_SUCCESS }))
    .catch(() => dispatch({ type: types.CHECKOUT_FAILURE }))
  ;
};
