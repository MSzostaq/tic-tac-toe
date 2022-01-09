import { PLAYER_MOVE } from "actions/gameActions";

export const makeMove = (game, playerId) => {
  let x;
  let y;
  // TODO:
  // if (game.board) {x = 2, y = 0}
  return {
    type: PLAYER_MOVE,
    payload: {
      x,
      y,
      playerId,
      symbol: game.players[playerId].symbol,
    },
  };
};
