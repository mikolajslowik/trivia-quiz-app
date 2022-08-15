import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { QuizState } from "../../interfaces";

const initialState: QuizState = {
  index: 0,
  questions: [],
  difficultyMode: "easy",
  score: 0,
  value: 0,
  pageMode: "start",
  status: "idle",
  finalAnswers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setDifficultyMode: (state, action) => {
      state.difficultyMode = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setPageMode: (state, action) => {
      state.pageMode = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    setFinalAnswers: (state, action) => {
      state.finalAnswers = [...state.finalAnswers, action.payload];
    },
    clearFinalAnswers: (state) => {
      state.finalAnswers = [];
    },
    clearQuestions: (state) => {
      state.questions = [];
    },
    clearScore: (state) => {
      state.score = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setDifficultyMode,
  setPageMode,
  setScore,
  setQuestions,
  setIndex,
  setFinalAnswers,
  clearFinalAnswers,
  clearQuestions,
  clearScore,
} = quizSlice.actions;

export const selectCount = (state: RootState) => state.quiz.status;
export const selectScore = (state: RootState) => state.quiz.score;
export const selectDifficulty = (state: RootState) => state.quiz.difficultyMode;
export const selectPageMode = (state: RootState) => state.quiz.pageMode;
export const selectQuestions = (state: RootState) => state.quiz.questions;
export const selectIndex = (state: RootState) => state.quiz.index;
export const selectFinalAnswers = (state: RootState) => state.quiz.finalAnswers;

export default quizSlice.reducer;
