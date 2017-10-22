import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberRunner extends Component {
  state = {
    value: 0,
  }

  componentDidUpdate() {
    if (this.state.value !== this.props.value) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.stepTo, 0, this.props.value);
    }
  }

  stepTo = (value) => {
    const step = value - this.state.value;
    if (Math.abs(step) < 1) {
      this.setState({ value });
    } else {
      this.setState({ value: this.state.value + (step * 0.05) });
    }
  }

  render() {
    return (
      <div>
        {parseInt(this.state.value, 10)}
      </div>
    );
  }
}

NumberRunner.propTypes = {
  value: PropTypes.number,
};

NumberRunner.defaultProps = {
  value: 0,
};

export default NumberRunner;
