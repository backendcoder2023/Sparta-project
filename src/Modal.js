import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, children, preventCloseOnOverlayClick }) => {
  const handleOverlayClick = (e) => {
    if (!preventCloseOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    show && (
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
