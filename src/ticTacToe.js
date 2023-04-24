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
    if (thereIsAWinner(board) === false && emptyValues.length === 1) {
      console.log("Player " + player + ":\n" + currentGameStatus(board) + "\n\nGAME ENDS WITH A DRAW!");
      return "GAME ENDS WITH A DRAW!";
    }
  } else {
    return "THIS SPACE IS ALREADY TAKEN";
  }
  return "NEXT PLAYER'S TURN";
};

function thereIsAWinner(board) {
  const allEqual = arr => arr.every( v => v === arr[0] && v !== " ")
  if (
    allEqual([board[0],board[3],board[6]]) ||
    allEqual([board[3],board[4],board[5]]) ||
    allEqual([board[0],board[4],board[8]]) ||
    allEqual([board[0],board[1],board[2]]) ||
    allEqual([board[6],board[7],board[8]]) ||
    allEqual([board[1],board[4],board[7]]) ||
    allEqual([board[2],board[5],board[8]]) ||
    allEqual([board[2],board[4],board[6]])
  ) {
    return true;
  } else {
    return false;
  }
};

function botPlay() {
  const randomItem = arr => arr.splice((Math.random() * arr.length) | 0, 1);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let botPlayer = "X";
  let board=drawBoard();
  console.log("Game Board Creation...\n" + currentGameStatus(board) + "\n\nBoard Created.\nThe game will start with player X");

  do {
    playersTurn(randomItem(arr),board);
    if (thereIsAWinner(board) === false && arr.length > 0) {
      if (arr.length % 2 === 0) {
        botPlayer = "X";
      } else {
        botPlayer = "O";
      }
      console.log("Player " + botPlayer + ":\n" + currentGameStatus(board));
    }
  } while (thereIsAWinner(board) === false && arr.length !== 0);
};

module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;
module.exports.playersTurn = playersTurn;
module.exports.botPlay = botPlay;
