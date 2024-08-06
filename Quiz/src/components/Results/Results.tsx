import { useContext } from "react";
import "./Results.css";
import { Button } from "antd";
import { QuizContext } from "../Helpers/Contexts";

const Results = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="card">
      <h2>Thank you for completing this quiz. Here are your results</h2>
      <p>You answered 5 out of 10 questions correctly</p>
      <ul>
        <li>Configuration: </li>
        <li>Type: </li>
        <li>Category: </li>
        <li>Time: </li>
        <li>Difficulty: </li>
      </ul>
      <div className="results_buttons">
        <Button
          onClick={() => {
            setGameState("start");
          }}
        >
          Restart
        </Button>
        <Button>Choose another quiz</Button>
      </div>
    </div>
  );
};

export default Results;
