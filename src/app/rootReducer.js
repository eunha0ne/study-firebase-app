import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "features/Modal/modalSlice";
import searchReducer from "features/Search/searchSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer
});

export default rootReducer;
