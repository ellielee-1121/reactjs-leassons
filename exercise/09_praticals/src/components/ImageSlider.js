import React, { Component } from 'react';
import './ImageSlider.css';


class ImageSlider extends Component {
  state = {
    currentIdx: 0,
  }
  prev =() => {
    let currentIdx = this.state.currentIdx - 1;
    if (currentIdx < 0) currentIdx = this.props.img.length;
    this.setState({
      currentIdx,
    });
  }
  next =() => {
    let currentIdx = this.state.currentIdx + 1;
    if (currentIdx >= this.props.imgs.length) currentIdx = 0;
    this.setState({
      currentIdx,
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
            if (idx < currentIdx) className += ' left';
            if (idx > currentIdx) className += ' right';
            return (
              <img
                className={className}
                src={src}
              />
            );
          })
          }
        </div>
        <div
          className={`slider-btn slider-next ${hasNext ? '' : 'hide'}`}
          onClick={this.next}
        />
      </div>
    );
  }
}

export default ImageSlider;// code here
