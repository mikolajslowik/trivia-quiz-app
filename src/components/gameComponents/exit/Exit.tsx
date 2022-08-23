import { useAppDispatch } from "../../../app/hooks";
import {
  clearFinalAnswers,
  clearQuestions,
  setIndex,
  setPageMode,
  setScore,
} from "../../../features/quiz/quizSlice";
import "./exit.css";
import EXIT from "../../../images/game/Exit.svg";
import EXITWhite from "../../../images/game/ExitWhite.svg";

export interface ExitProps {
  directory: string;
}

function Exit(props: ExitProps) {
  const dispatch = useAppDispatch();
  const handleExit = () => {
    dispatch(setIndex(0));
    dispatch(clearQuestions());
    dispatch(clearFinalAnswers());
    dispatch(setScore(0));
    dispatch(setPageMode("start"));
  };

  return (
    <div className="exitWrapper" onClick={handleExit}>
      <img
        src={props.directory === "Game" ? EXIT : EXITWhite}
        alt="exit"
        className={"exit"}
      />
    </div>
  );
}

export default Exit;
