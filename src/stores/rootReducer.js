import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './login/loginSlice';
import registerReducer from "./login/registerSlice"
import postReducer from "./dashboard/dashboardSlice"
import createListReducer from "./addList/addListSlice"

const rootReducer = combineReducers({
  home: homeReducer,
  register: registerReducer,
  post: postReducer,
  list: createListReducer
});

export default rootReducer;