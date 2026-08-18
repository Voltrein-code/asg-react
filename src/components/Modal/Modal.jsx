import React, { useEffect, useId, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = ({ onClose, children, title }) => {
  const modalRoot = document.getElementById("modals");
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(document.activeElement);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    dialog?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        tabIndex="-1"
      >
        <h2 className="modal__title" id={titleId}>
          {title}
        </h2>
        <div className="modal__content">{children}</div>
        <button
          className="button button_type_product modal-button"
          onClick={onClose}
          type="button"
          aria-label="Закрыть диалоговое окно"
        >
          Закрыть
        </button>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
