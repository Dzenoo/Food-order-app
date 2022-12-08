import { createSlice } from "@reduxjs/toolkit";

const ShowSlice = createSlice({
  name: "show",
  initialState: { cartIsShow: false },
  reducers: {
    show(state) {
      state.cartIsShow = state.cartIsShow = true;
    },

    hide(state) {
      state.cartIsShow = state.cartIsShow = false;
    },
  },
});

export const ShowActions = ShowSlice.actions;
export default ShowSlice;
