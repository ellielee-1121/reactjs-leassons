import React, { Component } from 'react';


class App extends Component {
  state = {
    moneyValue:'',
    percentValue:'',
    year:'',
    loanYaer:'',
  }
  moneyOnChange = (e) => {
    const moneyValue = e.target.value;
    this.setState({ moneyValue});
  }
  percentOnChange = (e) => {
    const percentValue = e.target.value;
    this.setState({ percentValue});
  }
  yearOnChange = (e) => {
    const year = e.target.value;
    const percentValue = this.state.percentValue;
    const moneyValue = this.state.moneyValue;
    this.setState({ year, loanYaer: this.calloanYaer(moneyValue, percentValue, year)});
  }

  calloanYaer = (moneyValue, percentValue, year) => {
    let loanYear = moneyValue * (percentValue/(100-percentValue)) / year;
    return loanYear;
  }
  render() {
    return (
      <div>
       自備金額 : <input value={this.state.moneyValue} onChange={this.moneyOnChange}/> 萬
       <br/>
       貸款金額比率: <input value={this.state.percentValue} onChange={this.percentOnChange}/> %
       <br/>
       年: <input value={this.state.year} onChange={this.yearOnChange}/>
       <br/>
       <hr/>
       每年還 <span>  {this.state.loanYaer}萬</span>



      </div>
    );
  }
}

export default App;
