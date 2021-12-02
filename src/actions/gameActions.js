import { SINGLE_PLAYER } from "constants/gameModes";
import { coinToss } from "utils/utils";

export const INIT_GAME = "INIT_GAME";
export const initGame = ({ modeId = SINGLE_PLAYER }) => {
  const startingPlayerId = coinToss() ? 1 : 2;
  const players = {
    1: {
      id: 1,
      isHuman: true,
      symbol: startingPlayerId === 1 ? "X" : "O",
      score: 0,
    },
    2: {
      id: 2,
      isHuman: modeId !== SINGLE_PLAYER,
      symbol: startingPlayerId === 2 ? "X" : "O",
      score: 0,
    },
  };
  return {
    type: INIT_GAME,
    payload: { modeId, players, board: [[], [], []], moves: [] },
  };
};

export const START_GAME = "START_GAME";
export const PLAYER_MOVE = "PLAYER_MOVE";
export const END_GAME = "END_GAME";
