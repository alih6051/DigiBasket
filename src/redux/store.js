import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import adminReducer from "./adminSlice";
import coupenSlice from "./coupenSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer,
    coupon: coupenSlice,
  },
});
