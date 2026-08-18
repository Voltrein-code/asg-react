import "./ModalOverlay.css";

const ModalOverlay = ({ onClick }) => {
  return <div className="overlay" onMouseDown={onClick} aria-hidden="true" />;
};

export default ModalOverlay;
