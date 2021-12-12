export const coinToss = () => Math.random() < 0.5;

export const createBoard = (size = 3, value = null) => {
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
