import "./answerBox.css";
import OK from "../../../images/finish/OK.svg";
import NotOK from "../../../images/finish/NotOK.svg";
import { Answer } from "../../../interfaces";

interface AnswerBoxProps {
  result: Answer;
}

function AnswerBox({ result }: AnswerBoxProps) {
  const isCorrect = result.isCorrect;

  const regexSingleQuotation = /&#039;/g;
  const regexDoubleQuotation = /&quot;/g;

  const questionNormalized = result?.question
    .replace(regexSingleQuotation, "'")
    .replace(regexDoubleQuotation, '"');

  return (
    <div className={`answerBoxWrapper ${isCorrect ? "right" : "wrong"} `}>
      <div className="answerBoxQuestion">{questionNormalized}</div>
      <div className="answerBoxIsCorrect">
        <img
          src={isCorrect ? OK : NotOK}
          alt={isCorrect ? "right" : "wrong"}
          className="sign"
        />
      </div>
    </div>
  );
}

export default AnswerBox;
