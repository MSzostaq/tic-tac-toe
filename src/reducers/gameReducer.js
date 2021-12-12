import { combineReducers } from "redux";
import modeIdReducer from "reducers/modeIdReducer";
import playersReducer from "reducers/playersReducer";
import currentPlayerIdReducer from "reducers/currentPlayerIdReducer";
import boardReducer from "reducers/boardReducer";
import movesReducer from "reducers/movesReducer";

const gameReducer = combineReducers({
  modeId: modeIdReducer,
  players: playersReducer,
  currentPlayerId: currentPlayerIdReducer,
  board: boardReducer,
  moves: movesReducer,
});

export default gameReducer;
