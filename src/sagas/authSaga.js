import { call, take, put, delay } from "redux-saga/effects";
import { types } from "../types/types";
import { API } from "../api/API";
import { login } from "../actions/auth";
import Swal from "sweetalert2";

export function* startLoginEmailPassword(email, password) {
  const user = yield call(API.authorizeMock, email, password);

  Swal.fire({
    title: "Uploading ...",
    allowOutsideClick: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });

  yield delay(900);
  Swal.close();

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    const { uid, displayName } = user;
    yield put(login(uid, displayName));
  } else {
    Swal.fire("Error", "This email does not exist", "error");
  }
}

export function* watchAuth() {
  while (true) {
    const { email, password } = yield take(types.loginRequest);
    yield call(startLoginEmailPassword, email, password);
  }
}
