import React from "react";

function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <div
      className={`${
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }`}
    >
      <button
        className="popup__close popup__close_type_edit"
        onClick={onClose}
      />
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <form name="info" className="popup__content" noValidate>
          {children}
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
          )
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
