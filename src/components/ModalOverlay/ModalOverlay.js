import React from "react";
import "./ModalOverlay.css";

const ModalOverlay = ({ onClick }) => {
  return <div className="overlay" onMouseDown={onClick} />;
};

export default ModalOverlay;
