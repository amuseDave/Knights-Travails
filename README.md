# Project: Knights-Travails (THE ODIN PROJECT)

A JavaScript implementation to find the shortest path for a knight's movement on an 8x8 chessboard from a starting position to an ending position using a queue-based approach.

## Overview

The `knightsMove` function calculates the shortest path for a knight to move from a given starting position (x, y) to an ending position (x, y) on an 8x8 chessboard. It returns the path as an array of coordinates and the total number of moves taken.

## Features

- **Input**: Starting and ending coordinates as arrays, e.g., `knightsMove([3, 3], [4, 3])`.
- **Output**: A string containing the shortest path and the total number of moves.
- **Algorithm**: Utilizes a queue to perform a breadth-first search (BFS) for the shortest path.
- **Board**: Standard 8x8 chessboard.

## Usage

1. Call the `knightsMove` function with the starting and ending coordinates:
   ```javascript
   const result = knightsMove([3, 3], [4, 3]);
   console.log(result);
