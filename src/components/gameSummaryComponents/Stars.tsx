import { useAppSelector } from "../../app/hooks";
import { selectFinalAnswers } from "../../features/quiz/quizSlice";
import "./stars.css";
import STAR from "../../images/finish/Star.svg";
import { correctAnserwAmount } from "../../utils";

function Stars() {
  const finalAnswers = useAppSelector(selectFinalAnswers);

  const stars = [];
  let i = 0;

  while (++i <= 10) {
    stars.push(STAR);
  }

  return (
    <div className="stars">
      {stars.map((el, index) => (
        <img
          src={el}
          alt="star"
          className={
            index < correctAnserwAmount(finalAnswers) ? "orange" : "gray"
          }
        />
      ))}
    </div>
  );
}

export default Stars;
