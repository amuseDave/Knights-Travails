# Project: Knights-Travails (THE ODIN PROJECT)

A JavaScript implementation to find the shortest path for a knight's movement on an 8x8 chessboard from a starting position to an ending position using a queue-based approach.

## Overview

The `knightsMove` function calculates the shortest path for a knight to move from a given starting position (x, y) to an ending position (x, y) on an 8x8 chessboard. It returns the path as an array of coordinates and the total number of moves taken.

## Features
- **Input**: Starting and ending coordinates as arrays, e.g., `knightsMove([3, 3], [3, 4])`. Non-integer inputs are floored; invalid inputs return an error.
- **Output**: A string with the shortest path (e.g., `[[3,3] | [3,4]]`) and total moves.
- **Algorithm**: Uses breadth-first search (BFS) with a queue and a `Set` for efficient tracking of visited positions.
- **Board**: Standard 8x8 chessboard (0-based coordinates: 0 to 7).

## Notes
- Coordinates are 0-based (0 to 7 for x and y). Invalid coordinates return 'Invalid position'.
- Non-integer inputs are floored (e.g., `[3.7, 3]` becomes `[3, 3]`); non-numeric inputs (e.g., `['a', 3]`) return 'Invalid position'.
- Identical start and end positions (e.g., `[3, 3]` to `[3, 3]`) return a 0-move path formatted as `[x,y]`.
- All valid inputs on an 8x8 board have a path due to the knight’s movement properties.
## Usage

1. Call the `knightsMove` function with the starting and ending coordinates:
   ```javascript
   const result = knightsMove([3, 3], [4, 3]);
   console.log(result);

