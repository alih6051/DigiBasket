import { createSlice } from '@reduxjs/toolkit';

const couponSlice = createSlice({
  name: 'coupon',
  initialState: {
    code: null,
    discount: 0,
    valid: false,
  },
  reducers: {
    applyCoupon: (state, action) => {
      const { code, discount } = action.payload;
      state.code = code;
      state.discount = discount;
      state.valid = true;
    },
    removeCoupon: state => {
      state.code = null;
      state.discount = 0;
      state.valid = false;
    },
  },
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;

export default couponSlice.reducer;
