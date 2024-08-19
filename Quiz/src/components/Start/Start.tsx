import "./Start.css";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { InputNumber } from "antd";
import { Select, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Start = () => {
  const { setGameState } = useContext(QuizContext);
  const navigate = useNavigate();
  const navigateToQuiz = () => navigate("/quiz");
  const navigateToStatistics = () => navigate("/statistics");
  return (
    <div className="start_card">
      <h2 className="settings_title">Settings:</h2>
      <div className="settings_select">
        <InputNumber min={5} max={15} defaultValue={5} />
        <Select
          placeholder="category"
          style={{ width: 120 }}
          options={[{ value: "category", label: <span>category</span> }]}
        />
        <Select
          placeholder="difficulty"
          style={{ width: 120 }}
          options={[{ value: "difficulty", label: <span>difficulty</span> }]}
        />
        <Select
          placeholder="type"
          style={{ width: 120 }}
          options={[{ value: "type", label: <span>type</span> }]}
        />
        <Select placeholder="time" style={{ width: 120 }}>
          <Option value="1m">1m</Option>
          <Option value="2m">2m</Option>
          <Option value="5m">5m</Option>
        </Select>
      </div>

      <div className="start_buttons">
        <Button
          onClick={() => {
            setGameState("/quiz");
            navigateToQuiz();
          }}
        >
          Start quiz
        </Button>
        <Button
          onClick={() => {
            setGameState("/statistics");
            navigateToStatistics();
          }}
        >
          See my stats
        </Button>
      </div>
    </div>
  );
};

export default Start;
