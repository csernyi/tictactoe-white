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
⚠ US #1 As a Tic-Tac-Toe game spectator I want to have a blank starting board drawn so that I can enjoy the game visually.
 ⚠ Scenario #1 Given a Tic-Tac-Toe game simulator When I start a new game Then the game should appear in a 3x3 board.

⚠ US #2 As a Tic-Tac-Toe game spectator I want player 'X' to move first so that I can verify that the game has started.
 ⚠ Scenario #1 Given a Tic-Tac-Toe game simulator When 'X' marks the 1st cell as it's first move Then the board should show the following stance: (X, , , , , , , , ).
 ⚠ Scenario #2 Given a Tic-Tac-Toe game simulator When 'X' marks the 2nd cell as it's first move Then the board should show the following stance: ( ,X, , , , , , , ).
 