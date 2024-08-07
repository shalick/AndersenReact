import { useContext } from "react";
import "./Results.css";
import { Button } from "antd";
import { QuizContext } from "../Helpers/Contexts";
import { List, Statistic } from "antd";
import { Link } from "react-router-dom";
const { Countdown } = Statistic;

const Results = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="results_card">
      <h2>Thank you for completing this quiz. Here are your results</h2>
      <p>You answered 5 out of 10 questions correctly</p>
      <List>
        <List.Item>Configuration: </List.Item>
        <List.Item>Type: </List.Item>
        <List.Item>Category: </List.Item>
        <List.Item>Time: </List.Item>
        <List.Item>Difficulty: </List.Item>
      </List>
      <Countdown
        title="Time quiz tooked:"
        value={new Date().setMinutes(new Date().getMinutes())}
        format="mm:ss"
      />

      <div className="results_buttons">
        <Link to="/quiz">
          <Button
            onClick={() => {
              setGameState("start");
            }}
          >
            Restart
          </Button>
        </Link>
        <Link to="/">
          <Button>Choose another quiz</Button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
