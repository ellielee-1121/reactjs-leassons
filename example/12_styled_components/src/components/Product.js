import React from 'react';
import styled from 'styled-components';

const ProductBlock = styled.div`
  font-size: 1.2em;
  padding: 8px;
`;

const Span = styled.span`
  display: inline-block;
`;

const Title = styled(Span)`
  width: 200px;
  font-weight: bold;
`;

const Price = styled(Span)`
  width: 80px;
  &:before{
    content: '$'
  }
`;

const Inventory = styled(Span)`
  display: ${props => (props.visible ? 'inline-block' : 'none')};
  width: 100px;  
  &:before{
    content: '庫存: ';
  }
`;

const Quantity = styled(Inventory)`
  &:before{
    content: '數量: ';
  }
`;


const Product = ({ price, inventory = 0, quantity = 0, title }) => (
  <ProductBlock>
    <Title>{title}</Title>
    <Price>{price}</Price>
    <Inventory visible={inventory > 0}>{inventory}</Inventory>
    <Quantity visible={quantity > 0}>{quantity}</Quantity>
  </ProductBlock>
);

export default Product;
