# Tic-Tac-Toe
The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules.
Game rules: https://en.wikipedia.org/wiki/Tic-tac-toe
Kata objective:
The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with a draw.

npm test -- --watchAll --collect-coverage --verbose

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog
✅ US #1 As a Tic-Tac-Toe game spectator I want to have a blank starting board drawn so that I can enjoy the game visually.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When I start a new game Then the game should appear in a 3x3 board.

✅ US #2 As a Tic-Tac-Toe game spectator I want player 'X' to move first so that I can verify that the game has started.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When 'X' marks the 1st cell as it's first move Then the board should show the following stance: (X, , , , , , , , ).
 ✅ Scenario #2 Given a Tic-Tac-Toe game simulator When 'X' marks the 2nd cell as it's first move Then the board should show the following stance: ( ,X, , , , , , , ).

✅ US #3 As a Tic-Tac-Toe game spectator I want player 'O' to move second so that I can verify that the players move alternately.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When 'X' marks the 1st then 'O' marks the 2nd cell Then the board should show the following stance: (X,O, , , , , , , ).
 ✅ Scenario #2 Given a Tic-Tac-Toe game simulator When 'X' marks the 2nd then 'O' marks the 9th cell Then the board should show the following stance: ( ,X, , , , , , ,O).

✅ US #4 As a Tic-Tac-Toe game spectator I want an error checking feature so that it can prevent invalid entries.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When the space is not in range 0-8 Then the game should show THIS IS AN INVALID POSITION.
 ✅ Scenario #2 Given a Tic-Tac-Toe game simulator When the space is not empty Then the game should show THIS SPACE IS ALREADY TAKEN.

✅ US #5 As a Tic-Tac-Toe game spectator I want to see the winning screens so that I can verify that 'X' or 'O' won the game.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X, , ,X,O, ,X, ,O) Then the game should return PLAYER X WON!.
 ✅ Scenario #2 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X, , ,X,O, ,X, ,O) Then the game should print the PLAYER X WON! winning screen.
 ✅ Scenario #3 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X, ,X,O,O,O,X, , ) Then the game should return PLAYER O WON!.
 ✅ Scenario #4 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X, ,X,O,O,O,X, , ) Then the game should print the PLAYER O WON! winning screen.
 ✅ Scenario #5 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X, , ,O,X, ,O, ,X) Then the game should return PLAYER X WON!.
 ✅ Scenario #6 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X, , ,O,X, ,O, ,X) Then the game should print the PLAYER X WON! winning screen.

✅ US #6 As a Tic-Tac-Toe game spectator I want to see the ended with draw screen so that I can verify that the game ended without a winner.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X,O,X,O,O,X,X,X,O) Then the game should return GAME ENDS WITH A DRAW!.
 ✅ Scenario #2 Given a Tic-Tac-Toe game simulator When board is in the following stance: (X,O,X,O,O,X,X,X,O) Then the game should print the GAME ENDS WITH A DRAW! ending screen.

🚧 US #7 As a Tic-Tac-Toe game spectator I want to run the game in bot mode so that I can watch an automated match.
 ✅ Scenario #1 Given a Tic-Tac-Toe game simulator When game is in bot mode Then starting screen is displayed (log contains 'Game Board Creation...').
 ✅ Scenario #2 Given a Tic-Tac-Toe game simulator When game is in bot mode Then at least 1 turn is displayed (log contains 'Player X:').
 ✅ Scenario #3 Given a Tic-Tac-Toe game simulator When game is in bot mode Then at least 2 turns are displayed (log contains 'Player O:').
 ✅ Scenario #4 Given a Tic-Tac-Toe game simulator When game is in bot mode Then at least 3 turn is displayed (log contains 'Player X:' for the second time).
 ⚠ Scenario #5 Given a Tic-Tac-Toe game simulator When game is in bot mode Then at least 4 turns are displayed (log contains 'Player O:' for the second time).
 ⚠ Scenario #6 Given a Tic-Tac-Toe game simulator When game is in bot mode Then the last step should appear (last log contains '!') - also add a 2 sec timeout.
