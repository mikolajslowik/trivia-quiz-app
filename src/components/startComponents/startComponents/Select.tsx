import { useAppDispatch } from "../../../app/hooks";
import { setDifficultyMode } from "../../../features/quiz/quizSlice";
import "./select.css";

function Select() {
  const dispatch = useAppDispatch();

  const handleDifficulty = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    dispatch(setDifficultyMode(e.target.value));
  };

  return (
    <>
      <select
        onChange={handleDifficulty}
        defaultValue="easy"
        className="select centered"
      >
        <option value="easy">easy</option>
        <option value="hard">hard</option>
      </select>
    </>
  );
}

export default Select;
