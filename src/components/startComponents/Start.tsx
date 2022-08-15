import "./start.css";
import Cup from "../../images/start/Cup.svg";
import Star from "../../images/start/Star.svg";
import TriviaLogo from "../../images/start/Trivia-Logo.svg";
import Icon from "./Icon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectScore, setPageMode } from "../../features/quiz/quizSlice";
import Select from "./Select";
import BackgroundStart from "./BackgroundStart";

export default function Start() {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectScore);

  return (
    <div className="container">
      <div className="logoContainer">
        <h2>Welcome to the</h2>
        <img src={TriviaLogo} alt="TriviaLogo" className="triviaLogo" />
      </div>
      <div className="controlsWrapper">
        <div className="centered">
          <Icon icon={Cup} text={"Difficulty"} />
          <Select />
        </div>
        <div className="amountWrapper centered">
          <Icon icon={Star} text={"Amount"} />
          <div className="amount">
            <span>{score}</span>
          </div>
        </div>
        <button
          onClick={() => dispatch(setPageMode("game"))}
          className="startBtn centered"
        >
          Start
        </button>
      </div>
      <BackgroundStart />
    </div>
  );
}
