function drawBoard() {
  let board = [" "," "," "," "," "," "," "," "," "];
  return board;
}

function currentGameStatus(board) {
  return board[0] + "|" + board[1] + "|" + board[2] + "\n-+-+-\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n-+-+-\n" + board[6] + "|" + board[7] + "|" + board[8];
}

function playersTurn(position, board) {
  if (board == " , , , , , , , , " && position === 0) {
    board[0] = 'X';
  } else if (board == " , , , , , , , , " && position === 1) {
    board[1] = 'X';
  } else if (position === 1) {
    board[1] = 'O';
  } else if (position === 8) {
    board[8] = 'O';
  }
}

module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
