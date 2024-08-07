import React, { Dispatch, SetStateAction } from "react";

interface IContextProps {
  gameState: string;
  setGameState: Dispatch<SetStateAction<string>>;
}

export const QuizContext = React.createContext({} as IContextProps);