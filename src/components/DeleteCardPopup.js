import React from "react";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function DeleteCardPopup({
  card,
  isOpen,
  onClose,
  onCardDelete,
  setIsLoading,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
