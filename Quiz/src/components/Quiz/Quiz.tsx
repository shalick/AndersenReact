import { useCallback, useEffect, useState } from "react";
import { Progress, Button } from "antd";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import QuizCountdown from "../QuizCountdown/QuizCountdown";
import { useDispatch, useSelector } from "react-redux";
import { QuizSettings } from "../../constants/types";
import { RootState } from "../../app/store";
import { fetchQuizQuestions, Question } from "../../app/API";
import { QuestionsState, Difficulty } from "../../app/API";

const Quiz = () => {
  const { setGameState } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const { question } = questions[currentQuestion];
  const onChoiceClick = useCallback(() => {
    currentQuestion !== questions.length - 1 &&
      setCurrentQuestion((prev) => prev + 1);
  }, [questions.length, setCurrentQuestion]);
  const navigate = useNavigate();
  const navigateToResults = () => navigate("/results");
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  // const category = useSelector((state) => state.category);
  // const difficulty = useSelector(
  //   (state: { difficulty: string }) => state.difficulty
  // );
  // const amount = useSelector((state: { amount: string }) => state.amount);
  // const type = useSelector((state: { type: string }) => state.type);
  const { category, difficulty, amount, type } = useSelector(
    (state: RootState) => state.start
  );
  // const { category, difficulty, amount, type } = useSelector(
  //   (state: { settings: QuizSettings }) => state.settings
  // );

  useEffect(() => {
    const fetchQuestions = async () => {
      // const url = new URL('https://opentdb.com/api.php');
      // url.searchParams.append('category', category);
      // url.searchParams.append('difficulty', difficulty);
      // url.searchParams.append('amount', amount);
      // url.searchParams.append('type', 'multiple');
      const endpoint = `https://opentdb.com/api.php?category=10&amount=5&difficulty=easy&type=multiple`;
      // const data = await (await fetch(endpoint)).json();

      const res = await fetch(endpoint);
      const json = await res.json();
      setQuestions(json.results);
    };
    fetchQuestions();
  }, [amount]);
  console.log(questions);

  if (!questions.length) return <p>Loading ...</p>;

  return (
    <div className="quiz_card">
      <Progress
        percent={(currentQuestion / questions.length) * 100}
        className="quiz_progress"
      />
      {/* <h2 className="question_text">{question}</h2> */}
      <div className="answer_buttons">
        {/* {choices.map((choice) => (
          <Button
            onClick={() =>
              currentQuestion !== questions.length - 1
                ? onChoiceClick()
                : (navigateToResults(), setGameState("/results"))
            }
            key={choice}
          >
            {choice}
          </Button>
        ))} */}
      </div>
      <QuizCountdown />
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        End quiz
      </Button>
      {isModalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Quiz;
