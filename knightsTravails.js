const MAX_BOARD = 7;
const MIN_BOARD = 0;

const POSSIBLE_MOVES = [
  { x: -2, y: 1 },
  { x: -1, y: 2 },
  { x: 2, y: 1 },
  { x: 1, y: 2 },
  { x: -2, y: -1 },
  { x: -1, y: -2 },
  { x: 2, y: -1 },
  { x: 1, y: -2 },
];

class Queue {
  constructor() {
    this.queue = null;
    this.endLine = null;
  }

  enqueue(data) {
    if (!this.queue) {
      this.queue = { data, next: null };
      this.endLine = this.queue;
    } else {
      this.endLine.next = { data, next: null };
      this.endLine = this.endLine.next;
    }
  }

  dequeue() {
    if (!this.queue) return 'Nothing to queue!';
    const { data } = this.queue;
    this.queue = this.queue.next;
    if (!this.queue) this.endLine = null;
    return data;
  }
}


function isPositionValid(x, y) {
  return x >= MIN_BOARD && y <= MAX_BOARD && x <= MAX_BOARD && y >= MIN_BOARD;
}

function knightsMove(startPos, endPos) {
  const [xS, yS] = startPos;
  const [xE, yE] = endPos;
  if (!isPositionValid(xS, yS) || !isPositionValid(xE, yE)) return 'Invalid Position';

  let shortestPath = { totalMoves: Infinity, moves: [] };

  const queue = new Queue();
  queue.enqueue({
    totalMoves: 0,
    moves: [{ x: xS, y: yS }],
  });

  while (queue.queue) {
    const { totalMoves, moves } = queue.dequeue();
    const curMove = moves[moves.length - 1];

    // If current move has higher totalMoves than assigned shorterPath
    if (totalMoves > shortestPath.totalMoves) continue;
    // Handle shortest path assignment
    if (curMove.x === xE && curMove.y === yE) {
      shortestPath.totalMoves = totalMoves;
      shortestPath.moves = moves.map((val) => `[${val.x}, ${val.y}]`);
      continue;
    }

    possibleMove: for (let i = 0; i < POSSIBLE_MOVES.length; i++) {
      const { x, y } = POSSIBLE_MOVES[i];
      const newX = curMove.x + x;
      const newY = curMove.y + y;

      if (!isPositionValid(newX, newY)) continue;

      for (let j = 0; j < moves.length; j++) {
        if (moves[j].x === newX && moves[j].y === newY) continue possibleMove;
      }

      queue.enqueue({
        totalMoves: totalMoves + 1,
        moves: [...moves, { x: newX, y: newY }],
      });
    }
  }

  return `You made it in ${shortestPath.totalMoves} moves!  Here's your path:
  ${shortestPath.moves.join(' | ')}
  `;
}

console.log(knightsMove([3, 3], [4, 3]));
