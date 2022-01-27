import React from "react";
import Popup from "./Popup";

function PopupWithForm({ name, title, children, isOpen, onClose, buttonText }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__text">{title}</h2>
      <form name={name} className="popup__content">
        {children}
        <button type="submit" className="popup__submit-button">
          {buttonText}
        </button>
        )
      </form>
    </Popup>
  );
}

export default PopupWithForm;
