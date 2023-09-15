import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/Authslice";
import carCheckboxReducer from "./Slice/carCheckbox";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cartcheckbox: carCheckboxReducer,
  },
});
export default store;
