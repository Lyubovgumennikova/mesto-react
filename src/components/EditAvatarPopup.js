import React, { useState, useEffect, useContext, useRef } from "react";
// import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Form from "./Form";

function EditAvatarPopup  ({ isOpen, onClose, onUpdateAvatar }) {
  // const avatar = ["avatar"] 
  const [inputValue, setInputValue] = useState("");
  const avatarInputRef = useRef(null);
  const currentUser = useContext(CurrentUserContext);
console.log(avatarInputRef.current)
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInputRef.current
     
      // setInputValue ({avatar: avatarInputRef.current.value}) /* Значение инпута, полученное с помощью рефа */,
    });
    console.log(currentUser.avatar)
  }
  useEffect(() => {
    setInputValue(currentUser.avatar);
    
  }, [currentUser]);

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
      <Form name="avatar" buttonText="Сохранить" onSubmit={handleSubmit} >
        <Input type="url" name="avatar" placeholder="Ссылка на изображение" 
        // onChange={handleAvatarChange} 
        //  ref={avatarInputRef}  
        //  value={inputValue} 
         />

        <span id="avatar-error" className="popup__input-error"></span>
      </Form>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

//ref={avatarInputRef} 