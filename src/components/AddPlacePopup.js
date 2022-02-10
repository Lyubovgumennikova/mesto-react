import React, { useEffect, useState } from "react";
import Form from "./Form";
import Input from "./Input";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, setIsSubmitted }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    onAddPlace({
      name, //: inputValue.name,
      link, //: inputValue.link,
    });
  }

  useEffect(() => {
    const data = ["name", "link"];
    setName(data.name);
    setLink(data.link);
    // setInputValue(data)
    // setIsValid(fieldsEnumeration(false));
    // setValidationMessage(fieldsEnumeration(""));
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form name="new-card" buttonText="Добавить" onSubmit={handleSubmit}>
        {/* onSubmit={onSubmit} */}
        <Input
          type="text"
          name="name"
          placeholder="Название"
          maxLength="30"
          handleChange={setName}
        />
        <span id="name-error" className="popup__input-error"></span>
        <Input
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          // value={inputValue.link}
          // onChange={handleInputChange}
          handleChange={setLink}
        />
        <span id="link-error" className="popup__input-error"></span>
      </Form>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
