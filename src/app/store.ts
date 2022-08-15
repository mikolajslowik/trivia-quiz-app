import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

