import React, { Component } from 'react';

class Password extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: '',
  //   };
  // }  沒有props可以用下面寫法
  state ={
    value: '',
    strength: '',
  }
  onChange =(e) => {
    const value = e.target.value;
    const strength = this.calcStrength(value);
    this.setState({
      value,
      strength,
    });
  }
  calcStrength = (value) => {
    let score = value.length;
    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    if (score > 20) return 'Great';
    if (score > 10) return 'Good';
    return 'Week';
  }
  render() {
    return (
      <div>
        <input type="password" value={this.state.value} onChange={this.onChange} />
        <span>{this.state.strength}</span>
      </div>
    );
  }
}

export default Password;
