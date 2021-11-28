import { SET_THEME } from "actions/themeActions";

const initialState = "dark";

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
