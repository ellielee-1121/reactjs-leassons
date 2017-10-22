import React, { Component } from 'react';
import axios from 'axios';
import './InfiniteScroll.css';

const API = 'https://images-scars377.c9users.io/';

class InfiniteScroll extends Component {
  state = {
    loading: false,
    images: [],
    next: '',
  }

  componentDidMount() {
    this.loadImages();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const distanceToBottom = document.body.clientHeight - (window.innerHeight + window.scrollY);
    if (distanceToBottom < 100 && !this.state.loading) {
      this.loadImages();
    }
  }

  loadImages = () => {
    this.setState({ loading: true });
    axios.get(`${API}?page=${this.state.next}`)
      .then((rs) => {
        this.setState({
          loading: false,
          images: this.state.images.concat(rs.data.images),
          next: rs.data.next,
        });
        this.onScroll();
      });
  }

  render() {
    return (
      <div className="infinite-scroll">
        {this.state.images.map(img => (
          <div
            className="infinite-scroll__image"
            style={{ backgroundImage: `url('${img}')` }}
            key={img}
          />
        ))}
        <div
          className="infinite-scroll__loading"
          style={{ opacity: this.state.loading ? 1 : 0 }}
        />
      </div>
    );
  }
}

export default InfiniteScroll;
