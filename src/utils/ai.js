import moment from "moment";
import { PLAYER_MOVE } from "actions/gameActions";

export const makeMove = (game, playerId) => {
  let x;
  let y;

  const { board } = game;
  do {
    x = Math.floor(Math.random() * 3);
    y = Math.floor(Math.random() * 3);
  } while (board[y][x] !== null);

  return {
    type: PLAYER_MOVE,
    payload: {
      date: moment().toISOString(),
      x,
      y,
      playerId,
      symbol: game.players[playerId].symbol,
    },
  };
};
