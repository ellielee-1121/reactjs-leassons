import React, { Component } from 'react';
import './Game.css';
const lines =[
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
]
class Game extends Component {
  state = {
    grids: [0,0,0,0,0,0,0,0,0],
    player: 1,
    winner: 0
  }
  onClickGrid = (idx)=>{
    if(this.state.grids[idx] !==0 )return;
    if(this.state.winner !==0 )return;
    this.state.grids[idx] = this.state.player;
    this.state.player = -this.state.player;
    this.state.winner = this.getWinner(this.state.grids);
    this.forceUpdate();
  }
  getWinner = (grids)=>{
    return lines.reduce((winner, line)=>{
      if(winner!==0) return winner;
      const sum = line.reduce((acc, idx)=>acc+grids[idx], 0);
      if(sum===3){
        return 1;
      }else if(sum===-3){
        return -1;
      }else{
        return 0;
      }
    }, 0);
  }
  getSymbol= (num) =>{
    switch(num){
      case 0 :return '';
      case 1 :return 'O';
      case -1:return 'X';
    }
  }
  render() {
    return (
      <div className='grids'>
        {this.state.grids.map((num,idx)=>(
          <div 
            className='grid'
            onClick={()=>this.onClickGrid(idx)}
          >
            {this.getSymbol(num)}
          </div>
        ))}
        <div>Player : {this.getSymbol(this.state.player)}</div>
        <div>Winner : {this.getSymbol(this.state.winner)}</div>
      </div>
    );
  }
}

export default Game;