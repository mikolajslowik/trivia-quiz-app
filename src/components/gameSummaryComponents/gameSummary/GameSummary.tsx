import { useAppSelector } from "../../../app/hooks";
import { selectFinalAnswers } from "../../../features/quiz/quizSlice";
import Exit from "../../gameComponents/exit/Exit";
import AnswerBox from "../answerBox/AnswerBox";
import BackgroundFinish from "../backgroundFinish/BackgorunFinish";
import PersonalScore from "../personalScore/PersonalScore";
import PlayAgainButton from "../playAgainButton/PlayAgainButton";
import "./gameSummary.css";

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
