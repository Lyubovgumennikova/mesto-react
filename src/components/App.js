import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/Api";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [isDeleteCardPopup, setIsDeleteCardPopup] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  // const [searchQuery, setSearchQuery] = useState([]);  поисковик
  // const [inputValue,setInputValue] = useState("");  //инпуты
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = React.useState("");

  // useEffect(() => {
  //   api
  //     .getUserInfo()

  //     .then((userData) => {
  //       setCurrentUser(userData);
  //     });
  // }, []);

  // useEffect(() => {
  //   // if (isLoading) {

  //   // }
  //   api
  //     .getInitialCards()
  //     .then((items) => {
  //       setCards(items);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       // popupInfo.renderLoading(false);
  //       // renderLoading(popupDeleteCardElement, false);
  //     });
  // }, []);

  
    const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    // setIsEditAvatarPopupOpen(true)
  };


  useEffect(() => {
    const userData = [api.getUserInfo(), api.getInitialCards()]; 
    Promise.all(userData).then(([userData, items]) => { 
      setCards(items); 
      // setUserInfoData(userData); 
      setCurrentUser(userData);
    }).catch((err) => console.log(err))
    .finally(() => {
      // popupInfo.renderLoading(false);
      // renderLoading(popupDeleteCardElement, false);
    });
  }, []);

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

  const handleDeleteCardPopupClick = (card) => {
    setIsDeleteCardPopup(true);
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setImagePopupOpen(false);
    setIsDeleteCardPopup(false);
  };

  const handleUpdateUser = (userInfo) => {
    // if (isLoading) {
    api
      .setUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      //   setIsLoading(false);
        // setInputValue('')
      // }

      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsSubmitted(false);
        // renderLoading(false);
      });
  };

  const handleUpdateAvatar = (inputValue) => {
    // setIsLoading(true);
    api
      .setUserAvatar(inputValue)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setInputValue('')
        setIsLoading(false);
      });
  };

  const handleAddPlaceSubmit = (inputValue) => {
    api
      .addNewCard(inputValue)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        // setInputValue('')
        // setIsLoading(false);
      });
  };

  

  function handleCardDelete(data) {
    api
      .deleteCard(data._id)
      .then(() => {
        const deleteCards = cards.filter((c) => c._id !== data._id);
        setCards(deleteCards);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

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
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCardPopupClick}
          cards={cards}
        />

        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          // isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          // isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isSubmitted={isSubmitted}
          isLoading={isLoading}
        />
        <DeleteCardPopup
          isOpen={isDeleteCardPopup}
          card={selectedCard}
          onCardDelete={handleCardDelete}
          onClose={closeAllPopups}
          // isLoading={isLoading}
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
