import "./backgroundGame.css";
import StainBcg1 from "../../../images/game/Stain-Purple.svg";
import StainBcg2 from "../../../images/game/Stain-Purple-Light.svg";
import StainBcg3 from "../../../images/start/Stain-Stripes-Pink.svg";
import StainBcg4 from "../../../images/game/Stain-Pink.svg";
import StainBcg5 from "../../../images/game/Stain-Purple-Small.svg";

function BackgroundGame() {
  return (
    <div className="gameWrapper">
      <img src={StainBcg1} alt="StainBcg1" className="stainBcg1 bcg" />
      <img src={StainBcg2} alt="StainBcg2" className="stainBcg2 bcg" />
      <img src={StainBcg3} alt="StainBcg3" className="stainBcg3 bcg" />
      <img src={StainBcg4} alt="StainBcg4" className="stainBcg4 bcg" />
      <img src={StainBcg5} alt="StainBcg5" className="stainBcg5 bcg" />
    </div>
  );
}

export default BackgroundGame;
