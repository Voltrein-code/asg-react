import React from "react";

const ModalOverlay = ({ onClick }) => {
  return <div className="overlay" onMouseDown={onClick} />;
};

export default ModalOverlay;
