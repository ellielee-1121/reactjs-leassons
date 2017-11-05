import React from 'react';
import Product from './Product';

const Cart = ({ products, total, onCheckoutClicked }) => (
  <div>
    <h3>購物車</h3>
    <div>
      {products.map(product => (
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
      ))}
    </div>
    <p>總金額: ${total}</p>
    <button
      onClick={onCheckoutClicked}
      disabled={products.length === 0}
    >
      結帳
    </button>
  </div>
);

export default Cart;
