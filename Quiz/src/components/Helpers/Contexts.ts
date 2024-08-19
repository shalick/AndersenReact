import React, { Dispatch, SetStateAction } from "react";

interface IContextProps {
  gameState: string;
  setGameState: Dispatch<
    SetStateAction<"/" | "/quiz" | "/results" | "/statistics">
  >;
}

export const QuizContext = React.createContext({} as IContextProps);
