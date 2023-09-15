import { createSlice } from "@reduxjs/toolkit";

const cartcheckboxSlice = createSlice({
  name: "cartcheckbox",
  initialState: {
    isChecked: false,
  },
  reducers: {
    check: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});
export const { check } = cartcheckboxSlice.actions;
export default cartcheckboxSlice.reducer;
