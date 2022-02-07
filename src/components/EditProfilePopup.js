import React, { useState, useEffect, useContext } from "react";
// import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Form from "./Form";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, ...props}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      // onUpdateUser={handleUpdateUser}
     
      
    >
      <Form name="edit" buttonText="Сохранить" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nik"
          placeholder="Имя"
          maxLength="40"
          // value={ name}
          onChange={handleNameChange}
        />
        <span id="nik-error" className="popup__input-error"></span>
        <Input
          type="text"
          name="job"
          placeholder="Занятие"
          maxLength="200"
          // defaultValue={description}
          onChange={handleDescriptionChange}
        />
        <span id="job-error" className="popup__input-error"></span>
      </Form>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
