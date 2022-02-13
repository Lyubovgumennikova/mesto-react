import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  handleChange,
  setIsSubmitted,
  isSubmitted,
  ref,
}) {
  // const [avatar, setAvatar] = useState("");
  const avatarInputRef = useRef(null);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setIsSubmitted(true);
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  };

  // useEffect(() => {
  //   setAvatar(avatarInputRef);
  // }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      // onSubmit={handleSubmit}
      onUpdateAvatar={onUpdateAvatar}
      setIsSubmitted={setIsSubmitted}
      handleSubmit={handleSubmit}
      isSubmitted={isSubmitted}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Input
        inputRef={avatarInputRef}
        type="url"
        name="avatar"
        placeholder="Ссылка на изображение"
        handleChange={handleChange}
      />
      <span id="avatar-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

//{console.dir(ref.current)

//ref={avatarInputRef}
