import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: ""
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      const { message } = action.payload;

      state.isOpen = true;
      state.message = message;
    },
    hideModal(state) {
      state.isOpen = false;
    }
  }
});

const { actions, reducer } = modalSlice;
export const { showModal, hideModal } = actions;
export default reducer;
