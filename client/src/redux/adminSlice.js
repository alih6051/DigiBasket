import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdminData } = adminSlice.actions;

export default adminSlice.reducer;
