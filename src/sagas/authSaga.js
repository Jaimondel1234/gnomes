import { call, take, put, delay } from "redux-saga/effects";
import { types } from "../types/types";
import { API } from "../api/API";
import { login } from "../actions/auth";
import Swal from "sweetalert2";
import { cleanGnomes, loadGnomes } from "../actions/gnome";

export function* loadingSaga() {
  Swal.fire({
    title: "Uploading ...",
    allowOutsideClick: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });

  yield delay(900);
  Swal.close();
}
export function* startLoginEmailPassword(email, password) {
  try {
    const user = yield call(API.authorizeMock, email, password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      const { uid, displayName } = user;
      yield call(loadingSaga);

      yield put(login(uid, displayName));
      yield put(loadGnomes());
    } else {
      Swal.fire("Error", "This email does not exist", "error");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* logoutSaga() {
  yield call(loadingSaga);
  yield put(cleanGnomes());
}

export function* watchAuth() {
  while (true) {
    const { email, password } = yield take(types.loginRequest);
    yield call(startLoginEmailPassword, email, password);
    yield take(types.logout);
    yield call(logoutSaga);
  }
}
