import rocketImage from "../../media/rocket.svg";
import "./Button.css";

export default function Button(props) {
  return (
    <>
      <button className={props.styles} type={props.type || "button"}>
        {props.withRocket && (
          <img className="button__rocket-image" alt="" src={rocketImage} />
        )}
        {props.children}
      </button>
    </>
  );
}
