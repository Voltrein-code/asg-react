import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("modals");

const Modal = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      e.key === "Escape" && onclose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className="modal">
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
        </div>
        <div className="modal__content">{children}</div>
        <button className="modal__button" type="button">
          Закрыть
        </button>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
