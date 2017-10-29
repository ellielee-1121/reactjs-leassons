import React, { Component } from 'react';

class ImagePreview extends Component {
  state ={
    file: null,
    img: '',
  }
  onFileSelected = (e) => {
    const file = e.target.files.item(0);
    const reader = new FileReader();
    reader.addEventListener('load', this.onImagesLoad);
    reader.readAsDataURL(file);
    this.setState({ file });
  }
  onImagesLoad = (e) => {
    this.setState({
      img: e.target.result,
    });
  }
  getFile = () => this.state.file

  render() {
    return (
      <div>
        <input accept="image/*" type="file" onChange={this.onFileSelected} />
        <br />
        <img src={this.state.img} />

      </div>
    );
  }
}

export default ImagePreview;
