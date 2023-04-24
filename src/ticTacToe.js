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
      console.log("Player " + player + ":\n" + currentGameStatus(board) + "\n\nPLAYER " + player + " WON!");
      return "PLAYER " + player + " WON!";
    }
    if (board == "X,O,X,O,O,X,X,X,O") {
      return "GAME ENDS WITH A DRAW!";
    }
  } else {
    return "THIS SPACE IS ALREADY TAKEN";
  }
}

function thereIsAWinner(board) {
  const allEqual = arr => arr.every( v => v === arr[0] && v !== " ")
  if (
    allEqual([board[0],board[3],board[6]]) ||
    allEqual([board[3],board[4],board[5]]) ||
    allEqual([board[0],board[4],board[8]])
  ) {
    return true;
  } else {
    return false;
  }
};


module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
