import { connect } from 'react-redux';
import { checkout } from '../actions';
import Cart from '../components/Cart';

const mapStateToProps = (state) => {
  const products = state.products.map(product => ({
    ...product,
    inventory: 0,
    quantity: state.cart[product.id],
  })).filter(product => product.quantity > 0);

  const total = products.reduce((sum, product) => (
    sum + (product.price * product.quantity)
  ), 0);

  return { products, total };
};

const mapDispatchToProps = dispatch => ({
  onCheckoutClicked: () => dispatch(checkout()),
});
// const mapDispatchToProps = {
//   onCheckoutClicked: checkout,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
