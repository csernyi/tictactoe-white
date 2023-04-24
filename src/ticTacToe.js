function drawBoard() {
  let board = [" "," "," "," "," "," "," "," "," "];
  return board;
}

function currentGameStatus(board) {
  if (board[0] == "X") {
    return 'X| | \n-+-+-\n | | \n-+-+-\n | | ';
  }
  if (board[1] == "X") {
    return ' |X| \n-+-+-\n | | \n-+-+-\n | | ';
  }
  return ' | | \n-+-+-\n | | \n-+-+-\n | | ';
}

function playersTurn(position, board) {
  if (position === 0) {
    board[0] = 'X';
  } else {
    board[1] = 'X';
  }
}

module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
