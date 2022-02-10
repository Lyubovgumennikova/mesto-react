import React, { useState, useEffect, useContext, useRef } from "react";
// import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Form from "./Form";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, setIsSubmitted, setCurrentUser }) {
  // const [value, setValue] = useState(""); 
  const [avatar, setAvatar] = useState("");
//  avatar = ["profile__avatar"];
  // const avatarInputRef = React.forwardRef()
  // const data = ["avatar"];
  const avatarInputRef = useRef(null);
  // const currentUser = useContext(CurrentUserContext);
  // const testRef = { current: avatarInputRef.current };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onUpdateAvatar({
      avatar: avatarInputRef.current.value //avatarInputRef.current.value //: avatarInputRef.current}

      // setInputValue ({avatar: avatarInputRef.current.value}) /* Значение инпута, полученное с помощью рефа */,
    });
    // // console.log(avatar)
  };
  useEffect(() => {
    // onUpdateAvatar(avatarInputRef);
    // return () => {};
    // setAvatar(() => {
    //   avatarInputRef.current = {avatar}
    // }) 
    // const data = ["avatar"];
    // setAvatar(data.avatar)
    
    // setCurrentUser(currentUser.avatar)
    // ref={avatarInputRef}
    setAvatar(avatarInputRef)
    // setValue('');
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
          inputRef={avatarInputRef}
          type="url"
          name="avatar"
          placeholder="Ссылка на изображение"
          // handleChange={onUpdateAvatar}
          
          // value={value}
          //  value={avatar}
          handleChange={setAvatar }
        />

        <span id="avatar-error" className="popup__input-error"></span>
      </Form>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

//ref={avatarInputRef}
