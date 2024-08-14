import React, { Dispatch, SetStateAction } from "react";

interface IContextProps {
  gameState: string;
  setGameState: Dispatch<SetStateAction<"start" | "quiz" | "results">>;
}

export const QuizContext = React.createContext({} as IContextProps);
