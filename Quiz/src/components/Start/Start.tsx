import "./Start.css";
import { useContext, useEffect, useState, ChangeEvent } from "react";
import { QuizContext } from "../Helpers/Contexts";
// import { InputNumber } from "antd";
import { Select, Button, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizSettings } from "../../redux/slices/startSlice";

const { Option } = Select;
interface Category {
  id: number;
  name: string;
}

const Start = () => {
  const { setGameState } = useContext(QuizContext);
  const navigate = useNavigate();
  const navigateToQuiz = () => navigate("/quiz");
  const navigateToStatistics = () => navigate("/statistics");
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [amount, setAmount] = useState("5");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://opentdb.com/api_category.php";
      const res = await fetch(url);
      const json = await res.json();
      setCategories(json.trivia_categories);
      setCategory(json.trivia_categories[0].id);
    };
    fetchCategories();
  }, []);
  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value);
  const onCategoryChange = (value: string) => setCategory(value);
  const onDifficultyChange = (value: string) => setDifficulty(value);
  const onTypeChange = (value: string) => setType(value);

  const onQuizSettings = () => {
    // const settings = {
    //   questionsQuantity,
    //   questionCategory,
    //   questionDifficulty,
    //   questionType,
    // };
    if (amount && category && difficulty && type) {
      dispatch(quizSettings({
        amount,
        category,
        difficulty,
        type
      }));
    }
  };
  if (!categories.length) return <p>Loading ...</p>;

  return (
    <div className="start_card">
      <h2 className="settings_title">Settings:</h2>
      <div className="settings_select">
        {/* <InputNumber
          defaultValue={5}
          onChange={handleAmountChange }
          min={5}
          max={15}
          step={1}
          // defaultValue={5}
        /> */}
        <input
          className={"formControl"}
          type={"number"}
          min={0}
          max={50}
          placeholder={"Number of questions"}
          onChange={onAmountChange}
          value={amount}
        />
        <Select
          placeholder="category"
          style={{ width: 220 }}
          onChange={onCategoryChange}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: <span>{category.name}</span>,
          }))}
        ></Select>
        <Select
          placeholder="difficulty"
          style={{ width: 220 }}
          onChange={onDifficultyChange}
          options={[
            {
              value: "easy",
              label: <span>Easy</span>,
            },
            {
              value: "medium",
              label: <span>Medium</span>,
            },
            {
              value: "hard",
              label: <span>Hard</span>,
            },
          ]}
        />
        <Select
          placeholder="type"
          style={{ width: 220 }}
          onChange={onTypeChange}
          options={[
            {
              value: "multiple",
              label: <span>Multiple Choice</span>,
            },
            {
              value: "boolean",
              label: <span>True/False</span>,
            },
          ]}
        />
        <Select placeholder="countdown time" style={{ width: 220 }}>
          <Option value="1m">1m</Option>
          <Option value="2m">2m</Option>
          <Option value="5m">5m</Option>
        </Select>
      </div>

      <div className="start_buttons">
        <Button
          onClick={() => {
            onQuizSettings();
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
