import React from 'react';
import styled from 'styled-components';

import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

const AppBlock = styled.div`
  font-family: Microsoft JhengHei;
`;
const App = () => (
  <AppBlock>
    <h2>React 24H 購物商城</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </AppBlock>
);

export default App;

