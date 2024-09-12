import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../redux/slices/questionsSlice";
import startReducer from "../redux/slices/startSlice";

export const store = configureStore({
  reducer: {
    start: startReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
