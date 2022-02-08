import React, { useState, useEffect, useContext, useRef } from "react";
// import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Form from "./Form";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar,ref }) {
  const [inputValue, setInputValue] = useState("");
  const avatar = ["avatar"];

  const avatarInputRef = useRef(null);
  // const currentUser = useContext(CurrentUserContext);
  // const testRef = { current: avatarInputRef.current };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInputRef.current.value,

      // setInputValue ({avatar: avatarInputRef.current.value}) /* Значение инпута, полученное с помощью рефа */,
    });
    // console.log(avatar)
  };
  useEffect(() => {
    setInputValue('');
  }, [isOpen]);

  // function handleAvatarChange(e) {
  //   setInputValue(e.target.value);
  // }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form name="avatar" buttonText="Сохранить" onSubmit={handleSubmit}>
        <Input
          ref={avatar}
          type="url"
          name="avatar"
          placeholder="Ссылка на изображение"
          // onChange={handleAvatarChange}
          
          // value={searchQuery}
           value={inputValue.avatar}
          handleChange={setInputValue}
        />

        <span id="avatar-error" className="popup__input-error"></span>
      </Form>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

//ref={avatarInputRef}
