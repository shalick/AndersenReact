export interface Question {
  question: string;
  choices: string[];
  type: string;
  correctAnswer: string;
}
export interface Questions {
  questions: Question[];
}
