import { createSlice } from "@reduxjs/toolkit";
import { jsQuiz } from "../../constants/questions";
import { Questions } from "../../constants/types"

const initialState = [...jsQuiz.questions];

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const selectAllQuestions = (state: Questions) => state.questions

export default questionsSlice.reducer;
