import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Start/Start";
import Quiz from "./components/Quiz/Quiz";

import { QuizContext } from "./components/Helpers/Contexts";
import Results from "./components/Results/Results";

function App() {
  const GAME_STATE_MAP = {
    start: Start,
    quiz: Quiz,
    results: Results,
  };
  const [gameState, setGameState] =
    useState<keyof typeof GAME_STATE_MAP>("start");
  const Component = GAME_STATE_MAP[gameState];
  return (
    <div className="wrapper">
      <Header />
      <main className="container">
        <QuizContext.Provider value={{ gameState, setGameState }}>
          <Component />
        </QuizContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
