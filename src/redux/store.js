import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


// import { legacy_createStore,combineReducers, compose } from "redux";
// import { cartReducer } from "./cartSlice";

// const rootReducer = combineReducers({
//   cart:cartReducer
// })

// // const composeEnhancer = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export const store = legacy_createStore(rootReducer)

