import React, { useEffect } from "react";

function PopupWithForm({ name, title, children, isOpen, onClose , buttonText}) {
  
  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      onClose();
    }
  };
  
  useEffect(() => {
    document.addEventListener("keyup", handleEscClose, false);

    return () => {
      document.removeEventListener("keyup", handleEscClose, false);
    };
  }, );

  const handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`${
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }`}
      onMouseUp={handleOverlayClose}
    >
      <button
        className="popup__close popup__close_type_edit"
        onClick={onClose}
      />
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <form name={name} className="popup__content" >
          {children}
          <button type="submit" className="popup__submit-button">
            {buttonText}
          </button>
          )
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
