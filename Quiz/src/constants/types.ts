export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export interface Questions {
  questions: Question[];
}

export interface QuizSettings {
  amount: string,
  category: string,
  difficulty: string,
  type: string,
}

export interface QuizSettingsObj {
  settings: QuizSettings 
}