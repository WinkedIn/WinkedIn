import {createSlice, createAction} from '@reduxjs/toolkit';
import { SagaActions } from '../sagas/SagaActions';

const initialState = {
  LoginUserData: null,
  LoginUserResponse: null,
};
const saveLoginUserData = (state, action) => {
  state.LoginUserData = action.payload;
  state.LoginUserResponse = null;
};

const saveLoginUserResponseData = (state, action) => {
  state.LoginUserResponse = action.payload || state.LoginUserResponse;
};

const removeLoginUserResponseData = state => {
  state.LoginUserResponse = null;
  state.LoginUserData = null;
};

/*  OtpVerify Slice  */
const LoginUserSlice = createSlice({
  name: SagaActions.LOGIN_USER,
  initialState,

  reducers: {
    saveLoginUser: saveLoginUserData,
    saveLoginUserResponse: saveLoginUserResponseData,
    removeLoginUserResponse: removeLoginUserResponseData,
  },
});

// Get actions from created OtpVerify Slice
const {saveLoginUser, saveLoginUserResponse, removeLoginUserResponse} =
  LoginUserSlice.actions;

const LoginUserSliceReducer = LoginUserSlice.reducer;

const selectLoginUserData = ({LoginUserReducer}) =>
  LoginUserReducer.LoginUserData ?? null;
const selectLoginUserResponse = ({LoginUserReducer}) =>
  LoginUserReducer.LoginUserResponse ?? null;

export {
  LoginUserSliceReducer,
  saveLoginUser,
  saveLoginUserResponse,
  removeLoginUserResponse,
  selectLoginUserData,
  selectLoginUserResponse,
};
