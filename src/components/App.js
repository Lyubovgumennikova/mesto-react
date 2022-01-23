import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
// import ImagePopup from './ImagePopup';
// import Card from './Card';

// import './index.css';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    // setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    // setDeletePopupOpen(false);
    // setSelectedCard(false);
    // setImagePopupOpen(false);
  };

  return (
    // <div class="page">
    <div className="page__container">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          type="text"
          name="nik"
          placeholder="Жак-Ив Кусто"
          maxLength="40"
        />
        <span id="nik-error" className="popup__input-error"></span>
        <Input
          type="text"
          name="job"
          placeholder="Исследователь океана"
          maxLength="200"
        />
        <span id="job-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="new-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <Input type="text" name="name" placeholder="Название" maxLength="30" />
        <span id="name-error" className="popup__input-error"></span>
        <Input type="url" name="link" placeholder="Ссылка на картинку" />
        <span id="link-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <Input type="url" name="avatar" placeholder="Ссылка на изображение" />

        <span id="avatar-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
      />
      {/* <ImagePopup />
    <Card />  */}
    </div>

    // </div>
  );
}

export default App;
