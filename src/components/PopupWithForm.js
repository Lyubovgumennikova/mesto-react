import React from "react";
// import Form from "./Form";
import Popup from "./Popup";


function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__text">{title}</h2>
      {children}
    </Popup>
  );
}

export default PopupWithForm;
