import "./App.css";
import { useAppSelector } from "./app/hooks";
import GameSummary from "./components/startComponents/gameSummaryComponents/GameSummary";
import Game from "./components/startComponents/gameComponents/Game";
import Start from "./components/startComponents/startComponents/Start";
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
