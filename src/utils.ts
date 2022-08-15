import { Answer } from "./interfaces";

export const correctAnserwAmount = (answers: Answer[]) => {
  const amount = answers.filter((el: Answer) => {
    return el.isCorrect === true;
  }).length;
  return amount;
};
