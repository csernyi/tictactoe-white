function drawBoard() {
  let board = [" "," "," "," "," "," "," "," "," "];
  return board;
}

function currentGameStatus(board) {
  if (board.includes("X")) {
    return 'X| | \n-+-+-\n | | \n-+-+-\n | | ';
  }
  return ' | | \n-+-+-\n | | \n-+-+-\n | | ';
}

function playersTurn(position, board) {
  board[0] = 'X';
}

module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
