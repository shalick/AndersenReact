import { useCallback, useState } from "react";
import { Progress, Button, Statistic } from "antd";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
const { Countdown } = Statistic;
import "./Quiz.css";
import { jsQuiz } from "./../../constants/questions";
import { Link, useNavigate } from "react-router-dom";

const Quiz = () => {
  const questions = [...jsQuiz.questions];
  const { setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices } = questions[currentQuestion];
  const onChoiceClick = useCallback(() => {
    currentQuestion !== questions.length - 1 &&
      setCurrentQuestion((prev) => prev + 1);
  }, [questions.length, setCurrentQuestion]);
  const navigate = useNavigate();
  const navigateToResults = () => navigate("/results");
  return (
    <div className="quiz_card">
      <Progress
        percent={(currentQuestion / questions.length) * 100}
        className="quiz_progress"
      />
      <h2 className="question_text">{question}</h2>
      <div className="answer_buttons">
        {choices.map((choice) => (
          <Button
            onClick={() =>
              currentQuestion !== questions.length - 1
                ? onChoiceClick()
                : (navigateToResults(), setGameState("results"))
            }
            key={choice}
          >
            {choice}
          </Button>
        ))}
      </div>
      <Countdown
        value={new Date().setMinutes(new Date().getMinutes() + 2)}
        format="mm:ss"
      />
      <Link to="/results">
        <Button
          onClick={() => {
            setGameState("results");
          }}
        >
          End quiz
        </Button>
      </Link>
    </div>
  );
};

export default Quiz;
