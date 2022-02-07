import React from "react";
import Popup from "./Popup";

function PopupWithForm({ children, isOpen, onClose, ...props }) {
  return (
    <Popup isOpen={isOpen} name={props.name} onClose={onClose}>
      <h2 className="popup__text">{props.title}</h2>
      {children}
    </Popup>
  );
}

export default PopupWithForm;
