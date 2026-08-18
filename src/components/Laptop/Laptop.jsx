import laptopImage from "../../media/laptop-back.jpg";
import "./Laptop.css";

export default function Laptop() {
  return (
    <div className="laptop">
      <div className="laptop__speaker"></div>
      <div className="laptop__screen">
        <div className="laptop__top-bar"></div>
        <img
          className="laptop__image"
          src={laptopImage}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
