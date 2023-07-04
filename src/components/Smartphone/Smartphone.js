import smartphoneImage from "../../media/smartphone-back.jpg";
import "./Smartphone.css";

export default function Smartphone() {
  return (
    <div className="smartphone">
      <div className="smartphone__speaker"></div>
      <div className="smartphone__border">
        <img
          className="smartphone__screen"
          alt="Изображение на смартфоне"
          src={smartphoneImage}
        ></img>
      </div>
      <div className="smartphone__button smartphone__button_type_mute"></div>
      <div className="smartphone__button smartphone__button_type_volume-up"></div>
      <div className="smartphone__button smartphone__button_type_volume-down"></div>
      <div className="smartphone__button smartphone__button_type_power"></div>
    </div>
  );
}
