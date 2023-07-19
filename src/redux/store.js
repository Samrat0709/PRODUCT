import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export default store;