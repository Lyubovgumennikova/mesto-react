import React, { useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
// import api from "../utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  

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

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
    setImagePopupOpen(false);
  };

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        // data={userInfoData}
        // onCardClick={onCardClick}
        onCardClick={handleCardClick}
        // cards={cards}
      />

      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <Input type="text" name="nik" placeholder="Имя" maxLength="40" />
        <span id="nik-error" className="popup__input-error"></span>
        <Input type="text" name="job" placeholder="Занятие" maxLength="200" />
        <span id="job-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="new-card"
        title="Новое место"
        buttonText="Добавить"
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
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <Input type="url" name="avatar" placeholder="Ссылка на изображение" />

        <span id="avatar-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />

      <ImagePopup
        onCardClick={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
