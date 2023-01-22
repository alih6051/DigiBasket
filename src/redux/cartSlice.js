import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isAdded = false;
      state.data = state.data.map((el) => {
        if (el.id == action.payload.id) {
          isAdded = true;
          return { ...el, quantity: el.quantity + action.payload.quantity };
        } else {
          return el;
        }
      });
      if (!isAdded) {
        state.data.push(action.payload);
      }
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, getData } = cartSlice.actions;

export default cartSlice.reducer;
