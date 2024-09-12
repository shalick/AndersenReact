import { createSlice } from "@reduxjs/toolkit";
import { QuizSettings, QuizSettingsObj } from "../../constants/types";

// const defaultState = () => ({
//   running: false,
//   gameOver: false,
//   category: "",
//   difficulty: "",
//   numQuestions: 15,
//   score: 0,
// });

const initialState = {
  // running: false,
  // gameOver: false,
  amount: "5",
  category: "",
  difficulty: "",
  type: "",
  // score: 0,
};

export const startSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    quizSettings(state, action) {
      // state.push(action.payload)
      const { amount, category, difficulty, type } = action.payload;
      state.amount = amount;
      state.category = category;
      state.difficulty = difficulty;
      state.type = type;
      return state;
    },
    // startQuiz: (state) => {
    //   state.running = true;
    //   return state;
    // },
    // stopGame: (state) => {
    //   state.running = false;
    //   state.gameOver = true;
    //   return state;
    // },
    // resetGame: () => defaultState(),
    // setScore: (state, action) => {
    //   state.score = action.payload;
    //   return state;
    // },
  },
});

export const { quizSettings } = startSlice.actions;

export const selectQuizAmount = (state: { settings: QuizSettings }) => state.settings;

export default startSlice.reducer;
