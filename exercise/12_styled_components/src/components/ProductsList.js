import React from 'react';
import ProductItem from './ProductItem';
import PageTitle from './PageTitle';

const ProductsList = ({ products, addToCart }) => (
  <div>
    <PageTitle>商品</PageTitle>
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </div>
);

export default ProductsList;
