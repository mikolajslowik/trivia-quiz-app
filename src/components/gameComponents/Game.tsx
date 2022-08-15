import "./game.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectDifficulty,
  selectIndex,
  selectQuestions,
  setQuestions,
} from "../../features/quiz/quizSlice";
import BackgroundGame from "./BackgroundGame";
import { useEffect, useState } from "react";
import QuestionBlock from "./QuestionBlock";
import Loader from "./Loader";
import Exit from "./Exit";

function Game() {
  const dispatch = useAppDispatch();
  const difficulty = useAppSelector(selectDifficulty);
  const questions = useAppSelector(selectQuestions);
  const index = useAppSelector(selectIndex);

  const baseURL = "https://opentdb.com/api.php?";
  const amountPARAMS = "amount=10";
  const difficultyPARAMS = `difficulty=${difficulty}`;
  const typePARAMS = "type=boolean";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (loading) return;
    setLoading(true);
    fetch(`${baseURL}${amountPARAMS}&${difficultyPARAMS}&${typePARAMS}`, {
      method: "GET",
      signal: controller.signal,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => (dispatch(setQuestions(data.results)), setLoading(false)))
      .catch((error) => {
        console.log(error.message);
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="gameWrapper">
      <div className="exitContainer">
        <Exit directory="Game" />
      </div>
      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <QuestionBlock data={questions[index]} />
      )}
      <BackgroundGame />
    </div>
  );
}

export default Game;
