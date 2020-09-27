import { createSlice } from "@reduxjs/toolkit";
import kakaoApi from "api/kakaoApi";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  page: 1
};

const modalSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getFetchBooksStart(state) {
      state.isLoading = true;
    },
    getFetchBooksSuccess(state, action) {
      const { documents } = action.payload;

      state.data = documents;
      state.isLoading = false;
      state.isError = false;
    },
    getFetchBooksFailure(state) {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export const fetchBooks = (keyword) => async (dispatch) => {
  dispatch(getFetchBooksStart());

  try {
    const data = await kakaoApi.fetchBooks(keyword);

    dispatch(getFetchBooksSuccess(data));
  } catch (error) {
    dispatch(getFetchBooksFailure());
    console.warn(error);
  }
};

const { actions, reducer } = modalSlice;
export const {
  getFetchBooksStart,
  getFetchBooksSuccess,
  getFetchBooksFailure
} = actions;
export default reducer;
