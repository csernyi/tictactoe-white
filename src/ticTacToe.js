function drawBoard() {
  let board = [" "," "," "," "," "," "," "," "," "];
  return board;
}

function currentGameStatus() {
  return " | | \n-+-+-\n | | \n-+-+-\n | | ";
}

module.exports.drawBoard = drawBoard;
module.exports.currentGameStatus = currentGameStatus;