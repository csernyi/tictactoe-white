const drawBoard = require('./ticTacToe').drawBoard;
const currentGameStatus = require('./ticTacToe').currentGameStatus;

describe('Board creation process', () => {
  it('should return an empty 3x3 board', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    let board = drawBoard();
    console.log('Game Board Creation...\n' + currentGameStatus() + '\n\nBoard Created.\nThe game will start with player X');
    expect(logSpy).toHaveBeenCalledWith('Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X');
    logSpy.mockRestore();
  });
});
