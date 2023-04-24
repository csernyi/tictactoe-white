const drawBoard = require('./ticTacToe').drawBoard;
const currentGameStatus = require('./ticTacToe').currentGameStatus;
const playersTurn = require('./ticTacToe').playersTurn;
const botPlay = require('./ticTacToe').botPlay;

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
  it('should print the PLAYER O WON! winning screen when in the following stance: (X, ,X,O,O,O,X, , )', () => {
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
  it('should return PLAYER X WON! when in the following stance: (X, , ,O,X, ,O, ,X)', () => {
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(3,board);
    playersTurn(4,board);
    playersTurn(6,board);
    expect(playersTurn(8,board)).toBe('PLAYER X WON!');
  });
  it('should print the PLAYER X WON! winning screen when in the following stance: (X, , ,O,X, ,O, ,X)', () => {
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

describe('Draw cases', () => {
  it('should return GAME ENDS WITH A DRAW! when in the following stance: (X,O,X,O,O,X,X,X,O)', () => {
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(1,board);
    playersTurn(2,board);
    playersTurn(3,board);
    playersTurn(5,board);
    playersTurn(8,board);
    playersTurn(6,board);
    playersTurn(4,board);
    expect(playersTurn(7,board)).toBe('GAME ENDS WITH A DRAW!');
  });
  it('should print the GAME ENDS WITH A DRAW! ending screen when in the following stance: (X,O,X,O,O,X,X,X,O)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    let board=drawBoard();
    playersTurn(0,board);
    playersTurn(1,board);
    playersTurn(2,board);
    playersTurn(3,board);
    playersTurn(5,board);
    playersTurn(8,board);
    playersTurn(6,board);
    playersTurn(4,board);
    playersTurn(7,board);
    expect(logSpy).toHaveBeenCalledWith('Player X:\nX|O|X\n-+-+-\nO|O|X\n-+-+-\nX|X|O\n\nGAME ENDS WITH A DRAW!');
    logSpy.mockRestore();
  });
});

describe('Bot mode should imitate 2 bots playing in auto mode', () => {
  it('and starting screen is displayed (log contains Game Board Creation...)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    botPlay();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Game Board Creation...'));
    logSpy.mockRestore();
  });
  it('and at least 1 turn is displayed (log contains Player X:)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    botPlay();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Player X:'));
    logSpy.mockRestore();
  });
  it('and at least 2 turns are displayed (log contains Player O:)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    botPlay();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Player O:'));
    logSpy.mockRestore();
  });
  it('and at least 3 turns are displayed (log contains Player X: for the second time)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    botPlay();
    expect(logSpy).toHaveBeenNthCalledWith(4, expect.stringContaining('Player X:'));
    logSpy.mockRestore();
  });
  it('and at least 4 turns are displayed (log contains Player O: for the second time)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    botPlay();
    expect(logSpy).toHaveBeenNthCalledWith(5, expect.stringContaining('Player O:'));
    logSpy.mockRestore();
  });
  it.skip('until they finish the game (last log contains !)', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    botPlay(2);
    expect(logSpy).toHaveBeenLastCalledWith(expect.stringContaining('!'));
    logSpy.mockRestore();
  });
});
