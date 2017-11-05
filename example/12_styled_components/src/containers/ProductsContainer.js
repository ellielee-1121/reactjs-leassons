import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ProductsList from '../components/ProductsList';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
