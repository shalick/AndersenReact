import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Start from "./components/Start/Start";
import Start from "./components/Start/Start";
import Quiz from "./components/Quiz/Quiz";
import { jsQuiz } from "./constants/questions";

import { QuizContext } from "./components/Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="wrapper">
      <Header />
      <main className="container">
        <QuizContext.Provider value={{ gameState, setGameState }}>
          {gameState === "start" && <Start />}
          {gameState === "quiz" && <Quiz questions={jsQuiz.questions} />}
        </QuizContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
