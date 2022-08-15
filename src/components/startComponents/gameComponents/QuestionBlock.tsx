import "./questionBlock.css";
import { QuestionBlockProps } from "../../../interfaces";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

function QuestionBlock(props: QuestionBlockProps) {
  const regexSingleQuotation = /&#039;/g;
  const regexDoubleQuotation = /&quot;/g;

  const questionNormalized = props.data?.question
    .replace(regexSingleQuotation, "'")
    .replace(regexDoubleQuotation, '"');

  return (
    <div className="questionBlockWrapper">
      <div className="category">{props.data?.category}</div>
      <div className="level">Level: 1</div>
      <ProgressBar />
      <div className="inquire">{questionNormalized}</div>
      <div className="btnContainer">
        <Button btnType="true" />
        <Button btnType="false" />
      </div>
    </div>
  );
}

export default QuestionBlock;
