import { useState } from "react";
import preloaderImage from "../../media/logo.png";
import "./Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <img
          alt="Иконка прелоадера"
          src={preloaderImage}
          className="preloader__image"
        />
      </div>
    </div>
  );
}
