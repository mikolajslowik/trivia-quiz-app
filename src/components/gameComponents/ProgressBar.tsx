import { useAppSelector } from "../../app/hooks";
import { selectIndex } from "../../features/quiz/quizSlice";
import "./progressBar.css";

function ProgressBar() {
  const index = useAppSelector(selectIndex);
  const barLevel = (index + 1) * 10;

  return (
    <div className="progressWrapper">
      <div>
        <span className="progress">{index + 1}</span>
        <span className="slash">/</span>
        <span className="total">10</span>{" "}
        <div className="progressBar">
          <div
            className="progressBarLevel"
            style={{ width: `${barLevel}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
