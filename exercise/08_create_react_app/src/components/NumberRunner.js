// code here
import React,{Component} from 'react';

class NumberRunner extends Component{
  state = {
    count: 0,
    target: 0,

  }
  componentDidUpdate(prevProps, prevState) {
    const {count, target} = this.state;
    if(count!==target){
      const diff = parseInt((target - count)*0.05, 10);
      if(diff== 0){
        this.setState({
          count: target,
        })
      }else{
        setTimeout(()=>{
          this.setState({
            count: count + diff,
          })
        }, 0)
      }
    }
  }
  
  add = () =>{
    this.setState({
      target:this.state.count +100,
    })
  }
  sub = () =>{
    this.setState({
      target:this.state.count -100,
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.target}</h1>
        <button onClick={this.add}> +100</button>
        <button onClick={this.sub}> -100</button>
      </div>
    )
  }
}

export default NumberRunner;