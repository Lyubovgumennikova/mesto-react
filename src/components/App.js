import React, { useState, useEffect} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import api from "../utils/Api";
// import ImagePopup from './ImagePopup';
import Card from './Card';

// import './index.css';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [userInfoData, setUserInfoData] = useState([]);
  const [cards, setCards] = useState([]);
  // const [selectedCard, setSelectedCard] = React.useState(false);
  // const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  useEffect(() => {
    const userInfoData = [api.getUserInfo(), api.getInitialCards()];
    Promise.all(userInfoData).then(([userData, items]) => {
      setCards(items); 
      setUserInfoData(userData)
    })
    // api.getInitialCards().then(data => {
    //   setCards(data); 
    // })
  }, [])

  

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

  // const handleCardClick = (card) => {
  //   setImagePopupOpen(true);
  //   setSelectedCard(card);
  // };

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
        data={userInfoData}
        // onCardClick={handleCardClick}
        cards={cards}
      />
      {/* <div className="card-template">
      {/* <article className="element"></article> */}
      {/* {
          
          cards.map(({id, ...props}) => <Card key={id} {...props} />) //title="name" src="link" 
        }  */}
      
        
       {/* </div> */} 
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
       
      {/* <ImagePopup isOpen={isImagePopupOpen}
        onClose={closeAllPopups} 
        card={selectedCard} /> */}
    </div>

    // </div>
  );
}

export default App;
