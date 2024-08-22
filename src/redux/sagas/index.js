import {all, fork} from 'redux-saga/effects';
import { watchLoginUser } from './LoginUserSaga';



export default function* rootSaga() {
  return yield all([
   fork(watchLoginUser),
   
  ]);
}
