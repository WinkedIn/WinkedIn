import { takeLatest, call, put } from "redux-saga/effects";
import { SagaActions } from "./SagaActions";
import { callApiService } from "../../services/ApiInstance";
import { saveLoginUser, saveLoginUserResponse } from "../reducers/LoginUserReducer";
import { UIReducer } from "../reducers";


export function* LoginUser(action) {
  yield put(UIReducer.showLoader(true));

  const data = yield call(
    callApiService,
    SagaActions.LOGIN_USER,
    action.payload
  );
  if (data.isSucceded) {
    yield put(saveLoginUser(data?.result?.data));
    yield put(UIReducer.showLoader(false));
    return;
  }

  const LoginUserResponse = {
    status: false,
    message: data?.result?.data?.message ?? "Server Error!!",
  };
  yield put(saveLoginUserResponse(LoginUserResponse));
  yield put(UIReducer.showLoader(false));
}

/**
 * Watch login function
 */
export function* watchLoginUser() {
  yield takeLatest(SagaActions.LOGIN_USER, LoginUser);
}
