import { put, select, takeLatest } from "redux-saga/effects";
import { END_GAME, PLAYER_MOVE, SET_PLAYER_SCORE } from "actions/gameActions";
import { getGame } from "selectors";
import { isWinningMove } from "utils/utils";

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
  }
}

function* onEndGame(action) {
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

export default [
  takeLatest(PLAYER_MOVE, onPlayerMove),
  takeLatest(END_GAME, onEndGame),
];
