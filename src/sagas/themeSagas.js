import { takeEvery } from "redux-saga/effects";
import { SET_THEME } from "actions/themeActions";

function* onSetTheme(action) {
  localStorage.setItem("theme", action.payload);
}

export default [takeEvery(SET_THEME, onSetTheme)];
