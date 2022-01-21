import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
// import ImagePopup from './ImagePopup';
// import Card from './Card';

// import './index.css';

function App() {
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();

  const handleEditAvatarClick = () => {
    const isEditAvatarPopupOpen = document.querySelector(".popup_type_avatar");
    // return (
    // setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    isEditAvatarPopupOpen.classList.add("popup_opened");
    // )
  };

  const handleEditProfileClick = () => {
    const isEditProfilePopupOpen = document.querySelector(".popup_type_edit");
    // return (
    // setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    isEditProfilePopupOpen.classList.add("popup_opened");
    // )
  };

  const handleAddPlaceClick = () => {
    const isAddPlacePopupOpen = document.querySelector(".popup_type_new-card");
    // return (
    // setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    isAddPlacePopupOpen.classList.add("popup_opened");
    // )
  };

  return (
    // <div class="page">
    <div className="page__container">
      <Header />
      <Main
        onEditAvatar={() => handleEditAvatarClick()}
        onEditProfile={() => handleEditProfileClick()}
        onAddPlace={() => handleAddPlaceClick()}
      />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль">
        <input
          type="text"
          name="nik"
          placeholder="Жак-Ив Кусто"
          id="nik"
          className="popup__input popup__input_prof_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="nik-error" className="popup__input-error"></span>
        <input
          type="text"
          name="job"
          placeholder="Исследователь океана"
          id="job"
          className="popup__input popup__input_prof_job"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="job-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="new-card" title="Новое место">
        <input
          type="text"
          name="name"
          placeholder="Название"
          id="name"
          className="popup__input popup__input_card_name"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="name-error" className="popup__input-error"></span>
        <input
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_card_image"
          required
        />
        <span id="link-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар">
        <input
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на изображение"
          className="popup__input popup__input_card_image"
          required
        />
        <span id="avatar-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?"/>
      {/* <ImagePopup />
    <Card />  */}
    </div>

    // </div>
  );
}

export default App;
