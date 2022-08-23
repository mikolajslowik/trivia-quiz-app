import "./App.css";
import { useAppSelector } from "./app/hooks";
import Game from "./components/gameComponents/game/Game";
import GameSummary from "./components/gameSummaryComponents/gameSummary/GameSummary";
import Start from "./components/startComponents/start/Start";
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
