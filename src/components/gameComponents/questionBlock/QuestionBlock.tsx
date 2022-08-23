import { QuestionBlockProps } from "../../../interfaces";
import Button from "../button/Button";
import ProgressBar from "../progressBar/ProgressBar";
import "./questionBlock.css";

function QuestionBlock(props: QuestionBlockProps) {
  const regexSingleQuotation = /&#039;/g;
  const regexDoubleQuotation = /&quot;/g;
  const regexQuoteEnd = /&rsquo;/g;
  const regexQuoteStart = /&lsquo;/g;

  const questionNormalized = props.data?.question
    .replace(regexSingleQuotation, "'")
    .replace(regexDoubleQuotation, '"')
    .replace(regexQuoteStart, "‘")
    .replace(regexQuoteEnd, "’");

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
