import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MenuBar.css';

class MenuBar extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
    setPage: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      current: props.items[0],
    };
  }
  setCurrent = (item) => {
    this.setState({
      current: item,
    });
    this.props.setPage(item);
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item) => {
          let className = 'menubar-item';
          if (item === this.state.current) {
            className += ' active';
          }
          return (
            <li
              className={className}
              onClick={() => this.setCurrent(item)}
            >
              {item}
            </li>
          );
        })}
        <li>{this.state.current}</li>
      </ul>
    );
  }
}

export default MenuBar;
