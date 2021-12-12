import { SINGLE_PLAYER } from "constants/gameModes";
import { coinToss, createBoard } from "utils/utils";

export const INIT_GAME = "INIT_GAME";
export const initGame = ({ modeId = SINGLE_PLAYER }) => {
  const currentPlayerId = coinToss() ? 1 : 2;
  const players = {
    1: {
      id: 1,
      isHuman: true,
      symbol: currentPlayerId === 1 ? "x" : "o",
      score: 0,
    },
    2: {
      id: 2,
      isHuman: modeId !== SINGLE_PLAYER,
      symbol: currentPlayerId === 2 ? "x" : "o",
      score: 0,
    },
  };

  return {
    type: INIT_GAME,
    payload: {
      modeId,
      players,
      currentPlayerId,
      board: createBoard(),
      moves: [],
    },
  };
};

export const PLAYER_MOVE = "PLAYER_MOVE";
// pushes move to board array
// pushes move to moves array
// checks winning combinations
export const END_GAME = "END_GAME";
// pushes score to game board
export const PLAY_AGAIN = "PLAY_AGAIN";
// dispatch INIT_GAME with saved score
