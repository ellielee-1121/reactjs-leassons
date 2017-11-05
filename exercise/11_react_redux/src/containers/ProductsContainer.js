import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { addToCart } from '../actions';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
