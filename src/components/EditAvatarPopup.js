import React, { useState, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import Form from "./Form";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  setIsLoading,
}) {
  
  const [avatar, setAvatar] = useState("");
  const avatarInputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onUpdateAvatar({
      avatar: avatarInputRef.current.value
    });
  };

  useEffect(() => {
    setAvatar(avatarInputRef);
  }, [isOpen]);

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
          handleChange={setAvatar}
        />
        <span id="avatar-error" className="popup__input-error"></span>
      </Form>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

//ref={avatarInputRef}
