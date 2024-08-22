import {combineReducers} from '@reduxjs/toolkit';

import * as UIReducer from './UIReducer';
import * as LoginUserReducer from './LoginUserReducer';



const reducers = combineReducers({

  UIReducer: UIReducer.uiSliceReducer,

  LoginUserReducer: LoginUserReducer.LoginUserSliceReducer,
  


});

export {
  reducers,
  UIReducer,
  LoginUserReducer,
 
 
};
