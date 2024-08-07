import { useCallback, useState } from "react";
import { Progress, Button, Statistic } from "antd";
const { Countdown } = Statistic;
import "./Quiz.css";

type Questions = {
  questions: Question[];
};
type Question = {
  question: string;
  choices: string[];
  type: string;
  correctAnswer: string;
};

const Quiz: React.FC<Questions> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices } = questions[currentQuestion];
  const onChoiceClick = useCallback(() => {
    setCurrentQuestion(prev => (prev < questions.length - 1) ? prev + 1 : 0);
}, [questions.length, setCurrentQuestion]);
  return (
    <div className="card">
      <Progress percent={(currentQuestion / questions.length) * 100} />
      <h2 className="question_text">{question}</h2>
      <div className="answer_buttons">
        {choices.map((choice) => (
          <Button onClick={() => onChoiceClick()} key={choice}>
            {choice}
          </Button>
        ))}
      </div>
      <Countdown value={new Date().setMinutes(new Date().getMinutes() + 2)} />
      <Button>End quiz</Button>
    </div>
  );
};

export default Quiz;
