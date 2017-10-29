import React, { Component } from 'react';

class Loan extends Component {
  constructor() {
    super();
    this.state = {
      self: 0,
      loanRatio: 0,
    };
  }
  onChangeSelf = (e) => {
    this.setState({
      self: e.target.value,
    });
  }
  onChangeRatio = (e) => {
    this.setState({
      loanRatio: e.target.value,
    });
  }
  render() {
    const self = Number(this.state.self);
    const loanRatio = Number(this.state.loanRatio);

    const loan = self * (loanRatio / (100 - loanRatio));
    const month = loan / (30 * 12);
    return (
      <div>
        <label>自</label>
        <input value={this.state.self} onChange={this.onChangeSelf} />
        <label>萬</label>
        <br />

        <label>成 </label>
        <input value={this.state.loanRatio} onChange={this.onChangeRatio} />
        <label>%</label>
        <br />

        <label>貸 </label>
        <input readOnly value={loan} />
        <label>萬</label>
        <br />

        <label>月 </label>
        <input value={month} />
        <label>萬</label>
        <br />
      </div>
    );
  }
}

export default Loan;
