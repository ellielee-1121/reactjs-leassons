import React from 'react';
import Product from './Product';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory === 0}
    >
      {product.inventory === 0 ? '售完' : '購買'}
    </button>
  </div>
);

export default ProductItem;
