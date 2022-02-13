import React, { useEffect, useState } from "react";
import Input from "./Input";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  isSubmitted,
  setIsSubmitted,
  // handleChange,
  value,
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    // e.preventDefault();
    // setIsSubmitted(true);
    
    onAddPlace = ({
      name,
      link
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      buttonText="Добавить"
      // onAddPlace={handleSubmit}
      handleSubmit={handleSubmit}
      // handleSubmit={onAddPlace}
      // onSubmit={handleSubmit}
      onAddPlace={onAddPlace}
      // handleChange={handleChange}
      // onAddPlace={onAddPlace}
      isSubmitted={isSubmitted}
      setIsSubmitted={setIsSubmitted}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Input
        type="text"
        name="name"
        placeholder="Название"
        maxLength="30"
        handleChange={setName}
        value={name}
      />
      <span id="name-error" className="popup__input-error"></span>
      <Input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        handleChange={setLink}
        value={value}
      />
      <span id="link-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
