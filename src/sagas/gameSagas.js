import { put, select, takeLatest } from "redux-saga/effects";
import {
  END_GAME,
  INIT_GAME,
  PLAYER_MOVE,
  PLAY_AGAIN,
  SET_PLAYER_SCORE,
} from "actions/gameActions";
import { SINGLE_PLAYER } from "constants/gameModes";
import { getGame } from "selectors";
import { makeMove } from "utils/ai";
import { isWinningMove } from "utils/utils";

function* onInitGame(action) {
  const { modeId, players } = action.payload;
  if (modeId !== SINGLE_PLAYER) {
    return;
  }
  const aiPlayer = players[1].isHuman === false ? players[1] : players[2];
  if (aiPlayer.symbol === "x") {
    yield put(makeMove(action.payload, aiPlayer.id));
  }
}

function* onPlayerMove(action) {
  const move = action.payload;
  const game = yield select(getGame);
  const { board } = game;
  if (isWinningMove(move, board)) {
    yield put({
      type: END_GAME,
      payload: {
        playerId: move.playerId,
      },
    });
  } else if (game.moves.length === 9) {
    yield put({
      type: END_GAME,
      payload: {
        playerId: 0, // draw
      },
    });
  } else {
    if (game.modeId === SINGLE_PLAYER) {
      const player = game.players[move.playerId];
      if (player.isHuman) {
        yield put(makeMove(game, game.currentPlayerId));
      }
    }
  }
}

function* onEndGame(action) {
  if (action.payload.playerId === 0) {
    return;
  }
  const game = yield select(getGame);
  const winner = game.players[action.payload.playerId];
  yield put({
    type: SET_PLAYER_SCORE,
    payload: {
      playerId: winner.id,
      score: winner.score + 1,
    },
  });
}

function* onPlayAgain(action) {
  const { modeId, players } = action.payload;
  if (modeId !== SINGLE_PLAYER) {
    return;
  }
  const aiPlayer = players[1].isHuman === false ? players[1] : players[2];
  if (aiPlayer.symbol === "x") {
    yield put(makeMove(action.payload, aiPlayer.id));
  }
}

export default [
  takeLatest(INIT_GAME, onInitGame),
  takeLatest(PLAYER_MOVE, onPlayerMove),
  takeLatest(END_GAME, onEndGame),
  takeLatest(PLAY_AGAIN, onPlayAgain),
];
