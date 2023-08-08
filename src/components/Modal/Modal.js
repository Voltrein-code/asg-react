/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("modals");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      e.key === "Escape" && onClose();
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
        <div className="modal__content">{children}</div>
        <button
          className="button button_type_product modal-button"
          onClick={onClose}
          type="button"
        >
          Закрыть
        </button>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
