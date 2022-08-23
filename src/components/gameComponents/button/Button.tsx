import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectIndex,
  selectQuestions,
  setFinalAnswers,
  setIndex,
  setPageMode,
} from "../../../features/quiz/quizSlice";
import { Answer } from "../../../interfaces";
import "./button.css";

export interface ButtonProps {
  btnType: string;
}

function Button({ btnType }: ButtonProps) {
  const dispatch = useAppDispatch();
  const index = useAppSelector(selectIndex);
  const questions = useAppSelector(selectQuestions);

  const answer: Answer = {
    isCorrect: false,
    question: questions[index]?.question,
    correct: questions[index]?.correct_answer,
  };

  const isCorrect = (res: string) => {
    return questions[index].correct_answer.toLowerCase() === btnType;
  };

  const handleAnswer = (res: string) => {
    answer.isCorrect = isCorrect(res);
    dispatch(setFinalAnswers(answer));
    if (index < questions.length - 1) {
      dispatch(setIndex(index + 1));
    } else {
      dispatch(setIndex(0));
      dispatch(setPageMode("finish"));
    }
  };

  return (
    <div className="buttonWrapper">
      <button
        className={`button ${btnType}Btn`}
        onClick={() => handleAnswer(btnType)}
      >
        {btnType}
      </button>
    </div>
  );
}

export default Button;
