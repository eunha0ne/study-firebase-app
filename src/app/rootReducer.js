import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "features/modalSlice";

const rootReducer = combineReducers({
  modal: modalReducer
});

export default rootReducer;
