const drawBoard = require('./ticTacToe').drawBoard;
const currentGameStatus = require('./ticTacToe').currentGameStatus;
const playersTurn = require('./ticTacToe').playersTurn;

describe('Board creation process', () => {
  it('should return an empty 3x3 board', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    let board = drawBoard();
    console.log('Game Board Creation...\n' + currentGameStatus(board) + '\n\nBoard Created.\nThe game will start with player X');
    expect(logSpy).toHaveBeenCalledWith('Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X');
    logSpy.mockRestore();
  });
});

describe('Board after the first move', () => {
  it('should show the following stance: (X, , , , , , , , )', () => {
    let board = drawBoard();
    playersTurn(0,board);
    expect(currentGameStatus(board)).toBe('X| | \n-+-+-\n | | \n-+-+-\n | | ');
  });
  it('should show the following stance: ( ,X, , , , , , , )', () => {
    let board= drawBoard();
    playersTurn(1,board);
    expect(currentGameStatus(board)).toBe(' |X| \n-+-+-\n | | \n-+-+-\n | | ');
  });
});

describe('Board after the second move', () => {
  it('should show the following stance: (X,O, , , , , , , )', () => {
    let board = drawBoard();
    playersTurn(0,board);
    playersTurn(1,board);
    expect(currentGameStatus(board)).toBe('X|O| \n-+-+-\n | | \n-+-+-\n | | ');
  });
  it.skip('should show the following stance: ( ,X, , , , , , ,O)', () => {
    let board= drawBoard();
    playersTurn(1,board);
    playersTurn(8,board);
    expect(currentGameStatus(board)).toBe(' |X| \n-+-+-\n | | \n-+-+-\n | |O');
  });
});
