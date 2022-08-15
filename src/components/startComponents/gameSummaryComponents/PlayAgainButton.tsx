import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  clearFinalAnswers,
  clearQuestions,
  selectDifficulty,
  selectFinalAnswers,
  setIndex,
  setPageMode,
  setScore,
} from "../../../features/quiz/quizSlice";
import { correctAnserwAmount } from "../../../utils";
import "./playAgainButton.css";

function PlayAgainButton() {
  const dispatch = useAppDispatch();
  const difficulty = useAppSelector(selectDifficulty);
  const finalAnswers = useAppSelector(selectFinalAnswers);

  const modeScoreMultiplier = difficulty === "easy" ? 10 : 20;

  const finalScore = () => {
    return dispatch(
      setScore(correctAnserwAmount(finalAnswers) * modeScoreMultiplier)
    );
  };

  finalScore();

  const playAgainHanler = () => {
    dispatch(setIndex(0));
    dispatch(clearQuestions());
    dispatch(clearFinalAnswers());
    dispatch(setPageMode("start"));
  };

  return (
    <div className="playAgainWrapper">
      <button className="playAgainBtn" onClick={playAgainHanler}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default PlayAgainButton;
