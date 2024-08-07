import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Start/Start";
import Quiz from "./components/Quiz/Quiz";
import { jsQuiz } from "./constants/questions";

import { QuizContext } from "./components/Helpers/Contexts";
import Results from "./components/Results/Results";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="container">
          <QuizContext.Provider value={{ gameState, setGameState }}>
            <Routes>
              {gameState === "start" && <Route path="/" element={<Start />} />}
              {gameState === "quiz" && (
                <Route
                  path="/quiz"
                  element={<Quiz questions={jsQuiz.questions} />}
                />
              )}
              {gameState === "results" && (
                <Route path="/results" element={<Results />} />
              )}
            </Routes>
          </QuizContext.Provider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
