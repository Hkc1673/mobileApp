import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './login/loginSlice';
import registerReducer from "./login/registerSlice"
import postReducer from "./dashboard/dashboardSlice"

const rootReducer = combineReducers({
  home: homeReducer,
  register: registerReducer,
  post: postReducer,
});

export default rootReducer;