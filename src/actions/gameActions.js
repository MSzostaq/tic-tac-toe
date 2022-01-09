import { SINGLE_PLAYER } from "constants/gameModes";
import { coinToss, createBoard } from "utils/utils";

export const INIT_GAME = "INIT_GAME";
export const initGame = ({ modeId = SINGLE_PLAYER, score }) => {
  const currentPlayerId = coinToss() ? 1 : 2;
  const players = {
    1: {
      id: 1,
      isHuman: true,
      symbol: currentPlayerId === 1 ? "x" : "o",
      score: score ? score[1] : 0,
    },
    2: {
      id: 2,
      isHuman: modeId !== SINGLE_PLAYER,
      symbol: currentPlayerId === 2 ? "x" : "o",
      score: score ? score[2] : 0,
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

export const PLAY_AGAIN = "PLAY_AGAIN";
export const playAgain = ({ modeId, players }) => {
  const newPlayers = {
    1: { ...players[1], symbol: players[1].symbol === "x" ? "o" : "x" },
    2: { ...players[2], symbol: players[2].symbol === "x" ? "o" : "x" },
  };

  return {
    type: PLAY_AGAIN,
    payload: {
      modeId,
      players: newPlayers,
      currentPlayerId: newPlayers[1].symbol === "x" ? 1 : 2,
      board: createBoard(),
      moves: [],
    },
  };
};

export const PLAYER_MOVE = "PLAYER_MOVE";
export const END_GAME = "END_GAME";
export const SET_PLAYER_SCORE = "SET_PLAYER_SCORE";
