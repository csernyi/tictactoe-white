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
  it('should show the following stance: ( ,X, , , , , , ,O)', () => {
    let board= drawBoard();
    playersTurn(1,board);
    playersTurn(8,board);
    expect(currentGameStatus(board)).toBe(' |X| \n-+-+-\n | | \n-+-+-\n | |O');
  });
});

describe('Error checking', () => {
  it('should show THIS IS AN INVALID POSITION when the space is not in range 0-8', () => {
    let board=drawBoard();
    playersTurn(0,board);
    expect(playersTurn(10,board)).toBe('THIS IS AN INVALID POSITION');
  });
  it('should show THIS SPACE IS ALREADY TAKEN when the space is not empty', () => {
    let board=drawBoard();
    playersTurn(0,board);
    expect(playersTurn(0,board)).toBe('THIS SPACE IS ALREADY TAKEN');
  });
});

describe('Win cases', () => {
  it('should return PLAYER X WON! when in the following stance: (X, , ,X,O, ,X, ,O)', () => {
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(4,board);
    playersTurn(3,board);
    playersTurn(8,board);
    expect(playersTurn(6,board)).toBe('PLAYER X WON!');
  });
  it('should print the PLAYER X WON! winning screen when in the following stance: (X, , ,X,O, ,X, ,O)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(4,board);
    playersTurn(3,board);
    playersTurn(8,board);
    playersTurn(6,board);
    expect(logSpy).toHaveBeenCalledWith('Player X:\nX| | \n-+-+-\nX|O| \n-+-+-\nX| |O\n\nPLAYER X WON!');
    logSpy.mockRestore();
  });
  it('should return PLAYER O WON! when in the following stance: (X, ,X,O,O,O,X, , )', () => {
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(3,board);
    playersTurn(2,board);
    playersTurn(4,board);
    playersTurn(6,board);
    expect(playersTurn(5,board)).toBe('PLAYER O WON!');
  });
  it.skip('should print the PLAYER O WON! winning screen when in the following stance: (X, ,X,O,O,O,X, , )', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(3,board);
    playersTurn(2,board);
    playersTurn(4,board);
    playersTurn(6,board);
    playersTurn(5,board);
    expect(logSpy).toHaveBeenCalledWith('Player O:\nX| |X\n-+-+-\nO|O|O\n-+-+-\nX| | \n\nPLAYER O WON!');
    logSpy.mockRestore();
  });
  it.skip('should return PLAYER X WON! when in the following stance: (X, , ,O,X, ,O, ,X)', () => {
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(3,board);
    playersTurn(4,board);
    playersTurn(6,board);
    expect(playersTurn(8,board)).toBe('PLAYER X WON!');
  });
  it.skip('should print the PLAYER X WON! winning screen when in the following stance: (X, , ,O,X, ,O, ,X)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(3,board);
    playersTurn(4,board);
    playersTurn(6,board);
    playersTurn(8,board);
    expect(logSpy).toHaveBeenCalledWith('Player X:\nX| | \n-+-+-\nO|X| \n-+-+-\nO| |X\n\nPLAYER X WON!');
    logSpy.mockRestore();
  });
});
