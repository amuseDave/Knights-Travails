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
    if (!this.queue) return null;
    const { data } = this.queue;
    this.queue = this.queue.next;
    if (!this.queue) this.endLine = null;
    return data;
  }
}

const MAX_BOARD = 8;
const MIN_BOARD = 1;

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

function isPositionValid(x, y) {
  return x >= MIN_BOARD && y <= MAX_BOARD && x <= MAX_BOARD && y >= MIN_BOARD;
}

function knightsMove(startPos, endPos) {
  if (!Array.isArray(startPos) || !Array.isArray(endPos)) return 'Invalid arguments';

  const [xS, yS, xE, yE] = [...startPos, ...endPos].map((pos) => Math.floor(pos));

  if (!isPositionValid(xS, yS) || !isPositionValid(xE, yE)) return 'Invalid Position';

  let shortestPath = { totalMoves: null, moves: [] };

  const queue = new Queue();
  queue.enqueue({
    totalMoves: 0,
    moves: [{ x: xS, y: yS }],
  });
  const visited = new Set([`${xS},${yS}`]);

  while (queue.queue) {
    const { totalMoves, moves } = queue.dequeue();
    const curMove = moves[moves.length - 1];

    // Handle shortest path assignment
    if (curMove.x === xE && curMove.y === yE) {
      shortestPath.totalMoves = totalMoves;
      shortestPath.moves = moves.map((val) => `[${val.x}, ${val.y}]`);
      break;
    }

    possibleMove: for (let i = 0; i < POSSIBLE_MOVES.length; i++) {
      const { x, y } = POSSIBLE_MOVES[i];
      const newX = curMove.x + x;
      const newY = curMove.y + y;

      if (!isPositionValid(newX, newY)) continue;

      if (visited.has(`${newX},${newY}`)) continue possibleMove;
      visited.add(`${newX},${newY}`);

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

const result = knightsMove([3, 3], [3, 4]);
console.log(result);
