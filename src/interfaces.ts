export interface QuestionBlockProps {
  data: Question;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizState {
  index: number;
  questions: Question[];
  difficultyMode: string;
  score: number;
  value: number;
  pageMode: string;
  finalAnswers: Answer[];
  status: "idle" | "loading" | "failed";
}

export interface Answer {
  isCorrect: boolean;
  question: string;
  correct: string;
}
