import { useAppSelector } from "../../app/hooks";
import { selectFinalAnswers } from "../../features/quiz/quizSlice";
import Exit from "../gameComponents/Exit";
import AnswerBox from "./AnswerBox";
import BackgroundFinish from "./BackgorunFinish";
import "./gameSummary.css";
import PersonalScore from "./PersonalScore";
import PlayAgainButton from "./PlayAgainButton";

function GameSummary() {
  const finalAnswers = useAppSelector(selectFinalAnswers);
  return (
    <div className="finishWrapper">
      <div className="exitContainer">
        <Exit directory="Finish" />
      </div>
      <PersonalScore />
      <ul className="listOfResults">
        {finalAnswers?.map((result, index) => (
          <li key={index}>
            <AnswerBox result={result} />
          </li>
        ))}
      </ul>
      <div className="playBtn">
        <PlayAgainButton />
      </div>
      <BackgroundFinish />
    </div>
  );
}

export default GameSummary;
