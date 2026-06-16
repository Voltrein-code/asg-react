import rocketImage from "../../media/rocket.svg";
import "./Button.css";

export default function Button(props) {
  return (
    <>
      <button className={props.styles}>
        {props.withRocket && (
          <img
            className="button__rocket-image"
            alt="Иконка ракеты"
            src={rocketImage}
          />
        )}
        {props.children}
      </button>
    </>
  );
}
