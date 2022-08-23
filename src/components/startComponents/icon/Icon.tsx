import "./icon.css";

export interface IconProps {
  icon: string;
  text: string;
}

function Icon(props: IconProps) {
  return (
    <div className="wrapperIcon">
      <div className="icon">
        <img src={props.icon}></img>
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
}

export default Icon;
