import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import adminReducer from "./adminSlice";
<<<<<<< HEAD
import coupenSlice from "./coupenSlice";
=======
import authReducer from "./authSlice";
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer,
<<<<<<< HEAD
    coupon: coupenSlice,
=======
    auth: authReducer,
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
  },
});
