import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Start/Start";
import Quiz from "./components/Quiz/Quiz";
import { QuizContext } from "./components/Helpers/Contexts";
import Results from "./components/Results/Results";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const GAME_STATE_MAP = {
    '/': Start,
    '/quiz': Quiz,
    '/results': Results,
    '/statistics': Statistics,
  };
  const [gameState, setGameState] =
    useState<keyof typeof GAME_STATE_MAP>("/");
  const Component = GAME_STATE_MAP[gameState];
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="container">
          <QuizContext.Provider value={{ gameState, setGameState }}>
            <Routes>
              <Route path={gameState} element={<Component />} />
            </Routes>
          </QuizContext.Provider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
