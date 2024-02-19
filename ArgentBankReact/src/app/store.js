import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../features/userManagement/userManagementSlice";

const store = configureStore({
  reducer: {
    userManagement: userReducer
  }
});

export { store };