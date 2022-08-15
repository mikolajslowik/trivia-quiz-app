import "./App.css";
import { useAppSelector } from "./app/hooks";
import Game from "./components/gameComponents/Game";
import GameSummary from "./components/gameSummaryComponents/GameSummary";
import Start from "./components/startComponents/Start";
import { selectPageMode } from "./features/quiz/quizSlice";

function App() {
  const mode = useAppSelector(selectPageMode);

  return (
    <>
      {mode === "start" && <Start />}
      {mode === "game" && <Game />}
      {mode === "finish" && <GameSummary />}
    </>
  );
}

export default App;
