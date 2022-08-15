import "./backgroundFinish.css";
import StainFinish1 from "../../images/finish/Stain1.svg";
import StainFinish2 from "../../images/finish/Stain2.svg";
import StainFinish3 from "../../images/finish/Stain3.svg";
import StainFinish4 from "../../images/finish/Stain4.svg";
import StainFinish5 from "../../images/finish/Stain5.svg";
import StainFinish6 from "../../images/finish/Stain6.svg";

function BackgroundFinish() {
  return (
    <div className="backgroundFinishWrapper">
      <img src={StainFinish1} alt="Stain1Finish" className="stainFinish1 bgc" />
      <img src={StainFinish2} alt="StainFinish2" className="stainFinish2 bgc" />
      <img src={StainFinish3} alt="StainFinish3" className="stainFinish3 bgc" />
      <img src={StainFinish4} alt="StainFinish4" className="stainFinish4 bgc" />
      <img src={StainFinish5} alt="StainFinish5" className="stainFinish5 bgc" />
      <img src={StainFinish6} alt="StainFinish6" className="stainFinish6 bgc" />
    </div>
  );
}

export default BackgroundFinish;
