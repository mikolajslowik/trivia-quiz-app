import "./backgroundStart.css";
import StainStart1 from "../../images/start/Stain-Purple.svg";
import StainStart2 from "../../images/start/Stain-Purple-2.svg";
import StainStart3 from "../../images/start/Stain-Stripes-Pink.svg";
import StainStart4 from "../../images/start/Stain-Stripes-White.svg";

export default function BackgroundStart() {
  return (
    <div className="containerBackgroundStart">
      <img src={StainStart1} alt="StainStart1" className="stainStart1 bcg" />
      <img src={StainStart2} alt="StainStart2" className="stainStart2 bcg" />
      <img src={StainStart3} alt="StainStart3" className="stainStart3 bcg" />
      <img src={StainStart4} alt="StainStart4" className="stainStart4 bcg" />
    </div>
  );
}
