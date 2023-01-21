import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import adminReducer from "./adminSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer,
  },
});
