import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import ShowSlice from "./show-slice";

const store = configureStore({
  reducer: { cart: CartSlice.reducer, show: ShowSlice.reducer },
});

export default store;
