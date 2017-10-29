import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 檢查ReactRropTypes

class FilterList extends Component {
  // static propTypes = {
  //   items: PropTypes.arrayOf(PropTypes.string),
  // }
  // static defaultProps = {
  //   items: [],
  // }

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filteredItems: props.items,
    };
  }
  onChangeFilter = (e) => {
    const filter = e.target.value;
    const needle = filter.toLowercase();
    const filteredItems = this.props.items.filter(item => (
      item.toLowercase().indexOf(needle) !== -1
    ));

    this.setState({
      filter,
      filteredItems,
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.filter} onChange={this.onChangeFilter} />
        <ul >
          {this.state.filteredItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

FilterList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
FilterList.defaultProps = {
  items: [],
};
export default FilterList;
