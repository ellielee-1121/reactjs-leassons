import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.css';

class ImageSlider extends Component {
  static propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  state = {
    currentIdx: 0,
  }

  prev = () => {
    this.setState({
      currentIdx: this.state.currentIdx - 1,
    });
  }

  next = () => {
    this.setState({
      currentIdx: this.state.currentIdx + 1,
    });
  }

  render() {
    const { imgs } = this.props;
    const { currentIdx } = this.state;
    const hasPrev = currentIdx > 0;
    const hasNext = currentIdx < imgs.length - 1;
    return (
      <div className="slider">
        <div
          className={`slider-btn slider-prev ${hasPrev ? '' : 'hide'}`}
          onClick={this.prev}
        />
        <div className="slider-container">
          {imgs.map((src, idx) => {
            let className = 'slider-img';
            if (currentIdx > idx) className += ' left';
            if (currentIdx < idx) className += ' right';
            return <img className={className} src={src} alt="" key={src} />;
          })}
        </div>
        <div
          className={`slider-btn slider-next ${hasNext ? '' : 'hide'}`}
          onClick={this.next}
        />
      </div>
    );
  }
}

export default ImageSlider;
