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
import EditAvatarPopup from "./EditAvatarPopup";

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
        // renderLoading(false);
      });
  };

  const handleUpdateAvatar = (inputValue) => {
    // setIsLoading(true);
    api.setUserAvatar(inputValue)
      .then((avatar) => {
        setCurrentUser(avatar);
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
        // name="edit"
        // title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
    
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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}  /> 
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
