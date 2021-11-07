import { combineReducers } from "redux";
import gameReducer from "reducers/gameReducer";
import notificationsReducer from "reducers/notificationsReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
