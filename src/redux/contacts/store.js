import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // reducer: rootReducer,
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
