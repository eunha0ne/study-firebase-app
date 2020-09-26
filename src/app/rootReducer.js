import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "features/modalSlice";
import searchReducer from "features/search/searchSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer
});

export default rootReducer;
