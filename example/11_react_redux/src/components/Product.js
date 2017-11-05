import React from 'react'
import PropTypes from 'prop-types'

import './Product.css';

const Product = ({ price, inventory = 0, quantity = 0, title }) => (
  <div className='product'>
    <span className='title'>{title}</span>
    <span className='price'>{price}</span>
    {inventory === 0 ? null : <span className='inventory'>{inventory}</span>}
    {quantity === 0 ? null : <span className='quantity'>{quantity}</span>}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product