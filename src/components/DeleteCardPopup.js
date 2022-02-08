import React from "react";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function DeleteCardPopup({ card, isOpen, onClose, onCardDelete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCardDelete(card);
  };

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form name="delete" buttonText="Да" onSubmit={handleSubmit} />
    </PopupWithForm>
  );
}

export default DeleteCardPopup;
