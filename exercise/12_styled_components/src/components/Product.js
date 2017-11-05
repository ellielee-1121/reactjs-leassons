import React from 'react';
import styled from 'styled-components';
import './Product.css';

const ProductBlock = styled.div`
  font-size: 1.6em;
  padding: 8px;
`;

const Span = styled.span`
  display: inline-block;
`;

const Title = styled(Span)`
  display: inline-block;
  width: 200px;
  font-weight: bold;
`;

const Inventory = styled(Span)`
  display: inline-block;
  width: 100px;
  &:before{
    content:'庫存: ';
  }
`;

const Product = ({ price, inventory = 0, quantity = 0, title }) => (
  <ProductBlock>
    <Title>{title}</Title>
    <span className="price">{price}</span>
    {inventory === 0 ? null : <Inventory>{inventory}</Inventory>}
    {quantity === 0 ? null : <span className="quantity">{quantity}</span>}
  </ProductBlock>
);


export default Product;
