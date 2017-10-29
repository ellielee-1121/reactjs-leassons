import React, { Component } from 'react';
import axios from 'axios';
import './InfiniteScroll.css';

const API = 'https://images-scars377.c9users.io/';
class InfiniteScroll extends Component {
  state = {
    images: [],
    next: '',
    loading: false,
  }

  componentDidMount() {
    this.loadImages();
    window.addEventListener('scroll', this.onscroll);
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.onscroll);
  }

  onscroll = () => {
    const winBottom = window.scrollY + window.innerHeight;
    const distanceToBottom = document.body.clientHeight - winBottom;
    if (distanceToBottom < 100 && this.state.loading !== true) {
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
      });
  }

  render() {
    return (
      <div>
        {this.state.images.map(img => (
          <div
            className="infinite-scroll__image"
            style={{ backgroundImage: `url('${img}')` }}
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
