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
        if (el._id == action.payload._id) {
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
    removeItem: (state, action) => {
      state.data = state.data.filter((el) => el._id != action.payload);
    },
    updateQuantity: (state, { payload }) => {
      state.data = state.data.map((el) => {
        if (el._id == payload._id) {
          return { ...el, quantity: payload.quant };
        } else {
          return el;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, getData, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
