import "./personalScore.css";
import Avatar from "../../../images/finish/Person.svg";
import { useAppSelector } from "../../../app/hooks";
import { selectFinalAnswers } from "../../../features/quiz/quizSlice";
import Stars from "./Stars";
import { correctAnserwAmount } from "../../../utils";

function PersonalScore() {
  const finalAnswers = useAppSelector(selectFinalAnswers);

  return (
    <div className="personalScoreWrapper">
      <div className="top">
        <div className="avatarContainer"></div>
        <img src={Avatar} alt="avatar" />
        <div className="youScored">You scored</div>
        <div>
          <span className="progress ">{correctAnserwAmount(finalAnswers)}</span>
          <span className="slash personalScore">/</span>
          <span className="total personalScore">10</span>{" "}
        </div>
      </div>
      <div className="bottom">
        <Stars />
      </div>
    </div>
  );
}

export default PersonalScore;
