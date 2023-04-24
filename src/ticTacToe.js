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
  if (position > 8 || position < 0) {
    return "THIS IS AN INVALID POSITION";
  }
  if (board[position] === " ") {
    board[position] = player;
    if (thereIsAWinner(board)) {
      console.log("Player X:\n" + currentGameStatus(board) + "\n\nPLAYER X WON!");
      return "PLAYER " + player + " WON!";
    }
  } else {
    return "THIS SPACE IS ALREADY TAKEN";
  }
}

function thereIsAWinner(board) {
  if (board[0] === board[3] && board[0] === board[6]) {
    return true;
  } else {
    return false;
  }
};


module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
