import { all } from "redux-saga/effects";
import gameSagas from "sagas/gameSagas";
import notificationsSagas from "sagas/notificationsSagas";
import themeSagas from "sagas/themeSagas";

export default function* rootSaga() {
  yield all([...gameSagas, ...notificationsSagas, ...themeSagas]);
}
