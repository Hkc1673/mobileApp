import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './login/loginSlice';
import registerReducer from "./login/registerSlice"
import postReducer from "./dashboard/dashboardSlice"
import createListReducer from "./addList/addListSlice"
import deleteListReducer from "./deleteList/deleteListSlice"

const rootReducer = combineReducers({
  home: homeReducer,
  register: registerReducer,
  post: postReducer,
  list: createListReducer,
  delete: deleteListReducer
});

export default rootReducer;