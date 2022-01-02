import { GRID_SIZE } from "constants/game";

export const coinToss = () => Math.random() < 0.5;

export const createBoard = (size = GRID_SIZE, value = null) => {
  const board = [];
  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      row[x] = value;
    }
    board[y] = row;
  }
  return board;
};

export function isWinningMove(move, board) {
  let isRowWin = true;
  for (let x = 0; x < GRID_SIZE; x++) {
    const cell = board[move.y][x];
    if (cell !== move.symbol) {
      isRowWin = false;
      break;
    }
  }
  if (isRowWin) {
    return true;
  }

  let isColumnWin = true;
  for (let y = 0; y < GRID_SIZE; y++) {
    const cell = board[y][move.x];
    if (cell !== move.symbol) {
      isColumnWin = false;
      break;
    }
  }
  if (isColumnWin) {
    return true;
  }

  if ((move.y === 1 || move.x === 1) && move.x !== move.y) {
    return false;
  }

  let isCrossOneWin = true;
  for (let n = 0; n < GRID_SIZE; n++) {
    const cell = board[n][n];
    if (cell !== move.symbol) {
      isCrossOneWin = false;
      break;
    }
  }

  let isCrossTwoWin = true;
  let x = GRID_SIZE - 1;
  for (let y = 0; y < GRID_SIZE; y++) {
    console.log(`[${y}, ${x}]`);
    const cell = board[y][x];
    if (cell !== move.symbol) {
      isCrossTwoWin = false;
      break;
    }
    x--;
  }

  if (isCrossOneWin || isCrossTwoWin) {
    return true;
  }
  return false;
}
