import { combineReducers } from "redux";
import gameReducer from "reducers/gameReducer";
import notificationsReducer from "reducers/notificationsReducer";
import themeReducer from "reducers/themeReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  notifications: notificationsReducer,
  theme: themeReducer,
});

export default rootReducer;
