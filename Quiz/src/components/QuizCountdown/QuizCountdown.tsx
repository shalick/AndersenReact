import { Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Helpers/Contexts";
import { useContext } from "react";
const { Countdown } = Statistic;

const QuizCountdown = () => {
  const duration = 1;
  const navigate = useNavigate();
  const navigateToResults = () => navigate("/results");
  const { setGameState } = useContext(QuizContext);
  const onFinish = () => {
    navigateToResults();
    setGameState("results");
  };
  return (
    <Countdown
      value={new Date().setMinutes(new Date().getMinutes() + duration)}
      format="mm:ss"
      onFinish={onFinish}
    />
  );
};

export default QuizCountdown;
