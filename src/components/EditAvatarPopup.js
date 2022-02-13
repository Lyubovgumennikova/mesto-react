import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  setIsSubmitted,
  isSubmitted,
}) {
  const [value, setValue] = useState ('');
  const avatarInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  };

  useEffect(() => {
    // console.log(avatarInputRef);
    // console.log(avatarInputRef.current)
    setValue("");
  },[isOpen]);
  
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      setIsSubmitted={setIsSubmitted}
      isSubmitted={isSubmitted}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Input
        inputRef={avatarInputRef}
        type="url"
        name="avatar"
        placeholder="Ссылка на изображение"
        handleChange={setValue}
        value={value}
      />
      <span id="avatar-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
