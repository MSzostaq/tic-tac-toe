import { combineReducers } from "redux";
import modeIdReducer from "reducers/modeIdReducer";
import playersReducer from "reducers/playersReducer";
import currentPlayerIdReducer from "reducers/currentPlayerIdReducer";
import boardReducer from "reducers/boardReducer";
import movesReducer from "reducers/movesReducer";
import winnerIdReducer from "reducers/winnerIdReducer";

const gameReducer = combineReducers({
  modeId: modeIdReducer,
  players: playersReducer,
  currentPlayerId: currentPlayerIdReducer,
  board: boardReducer,
  moves: movesReducer,
  winnerId: winnerIdReducer,
});

export default gameReducer;
