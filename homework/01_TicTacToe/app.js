function judgeWinner(square) {
  var win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (var i = 0; i < win.length; i++) {
    var winCase = win[i];
    if (square[winCase[0]] == square[winCase[1]] && square[winCase[1]] == square[winCase[2]]) {
      return square[winCase[0]];// 返回贏家
    }
  }
  return false;
}
var TicTacToe = React.createClass({
  render: function () {
    return (
            <div className="game">
                <Board />
            </div>
    );
  },
});
var Board = React.createClass({
  getInitialState: function () {
    return {
      squares: ['', '', '', '', '', '', '', '', ''],
      turnToX: true,
    };
  },
  handleClick: function (i) {
    var squares = this.state.squares.slice();
    squares[i] = this.state.turnToX ? 'X' : 'O';
    if (judgeWinner(this.state.squares)) {
      return;
    }
    this.setState({
      squares: squares,
      turnToX: !this.state.turnToX,
    });
  },
  renderSquare: function (i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  },

  render: function () {
    var winner = judgeWinner(this.state.squares);// 判斷贏家
    var status = '';
    if (winner) {
      status = <span style={{ color: 'red' }}>{`贏家是：${winner}`}</span>;
    } else {
      var player = this.state.turnToX ? 'X' : 'O';
      status = `輪到:${player}`;
    }
    return (
            <div clasName="board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="status">{status}</div>
            </div>
    );
  },
});

var Square = React.createClass({
  getInitialState: function () {
    return {
      value: null,
    };
  },
  changeState: function () {
    this.setState({
      value: 'X',
    });
  },
  render: function () {
    return (
            <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
    );
  },
});


ReactDOM.render(
    <TicTacToe/>,
    document.getElementById('app')
);
