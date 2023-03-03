import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  authState: false,
  token: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoading: (state) => {
      state.loading = true;
    },
    authError: (state) => {
      state.loading = false;
      state.error = true;
    },
    authSuccess: (state, { payload }) => {
      state.loading = false;
      state.authState = true;
      (state.token = payload.token), (state.user = payload.user);
    },
    createUserSuccess: (state) => {
      state.loading = false;
    },
    authReset: (state) => {
      (state.loading = false),
        (state.error = false),
        (state.authState = false),
        (state.token = ""),
        (state.user = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  authLoading,
  authError,
  authSuccess,
  createUserSuccess,
  authReset,
} = authSlice.actions;

export default authSlice.reducer;
