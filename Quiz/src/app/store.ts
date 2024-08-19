import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../redux/slices/questionsSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});
