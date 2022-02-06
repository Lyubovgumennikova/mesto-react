import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import api from "../utils/Api";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Form from "./Form";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()

      .then((userData) => {
        setCurrentUser(userData);
      });
  }, []);

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
    setSelectedCard({ name: "", link: "" });
    setImagePopupOpen(false);
  };

  const handleUpdateUser = (userInfo) => {
    // setIsLoading(true);
    api.setUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
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
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        {/* <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <Form name="edit" buttonText="Сохранить">
      <Input
        type="text"
        name="nik"
        placeholder="Имя"
        maxLength="40"
        // value={name}
        // onChange={handleNameChange}
      />
      <span id="nik-error" className="popup__input-error"></span>
      <Input
        type="text"
        name="job"
        placeholder="Занятие"
        maxLength="200"
        // value={description}
        // onChange={handleDescriptionChange}
      />
      <span id="job-error" className="popup__input-error"></span>
      </Form>
        </PopupWithForm> */}
        <PopupWithForm
          name="new-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <Form name="new-card" buttonText="Добавить">
            {/* onSubmit={onSubmit} */}
            <Input
              type="text"
              name='name'
              placeholder="Название"
              maxLength="30"
            />
            <span id="name-error" className="popup__input-error"></span>
            <Input type="url" name="link" placeholder="Ссылка на картинку" />
            <span id="link-error" className="popup__input-error"></span>
          </Form>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <Form name="avatar" buttonText="Сохранить">
            <Input
              type="url"
              name="avatar"
              placeholder="Ссылка на изображение"
            />

            <span id="avatar-error" className="popup__input-error"></span>
          </Form>
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
          name="image"
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
