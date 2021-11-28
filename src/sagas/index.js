import { all } from "redux-saga/effects";
import notificationsSagas from "sagas/notificationsSagas";
import themeSagas from "sagas/themeSagas";

export default function* rootSaga() {
  yield all([...notificationsSagas, ...themeSagas]);
}
