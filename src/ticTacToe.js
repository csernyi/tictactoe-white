function drawBoard() {
  let board = [" "," "," "," "," "," "," "," "," "];
  return board;
}

function currentGameStatus(board) {
  return board[0] + "|" + board[1] + "|" + board[2] + "\n-+-+-\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n-+-+-\n" + board[6] + "|" + board[7] + "|" + board[8];
}

function playersTurn(position, board) {
  const emptyValues = board.filter((empty) => empty === " ");
  let player = "X";
  if (emptyValues.length % 2 === 0) {
    player = "O";
  }
  board[position] = player
}

module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
