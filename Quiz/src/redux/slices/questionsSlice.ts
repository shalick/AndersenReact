import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Question } from "../../constants/types";
import axios from "axios";

const QUESTIONS_URL = "https://opentdb.com/api.php";

export const fetchPosts = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    try {
      // const response = await
      const url = new URL("https://opentdb.com/api.php");
      // url.searchParams.append("category", category);
      // url.searchParams.append("difficulty", difficulty);
      // url.searchParams.append("amount", amount);
      // url.searchParams.append("type", type);

      const res = await fetch(url.href);
      const json = await res.json();
      return [...json.results];
    } catch (err) {
      return (err as Error).message;
    }
  }
);

const initialState = {
  questions: [],
  status: "idle",
  error: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const selectAllQuestions = (state: {
  questions: { questions: Question };
}) => state.questions.questions;

export default questionsSlice.reducer;
