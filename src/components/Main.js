import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext"

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  
}) {

  

  const [cards, setCards] = useState([]);
  
  useEffect(() => { 
    api.getInitialCards()
        .then ((items) => {
        setCards(items);
      }).catch((err) => console.log(err))
      .finally(() => {
        // popupInfo.renderLoading(false);
        // renderLoading(popupDeleteCardElement, false);
      });
    
  }, []); 

  const currentUser = React.useContext(CurrentUserContext);

 


  function handleCardDelete(data) {
    api.deleteCard(data._id)
    .then(() => {
      const deleteCards = cards.filter((c) => c._id !== data._id);
      setCards(deleteCards); 
      // popupDeleteCard.closePopup();
    }).catch((err) => console.log(err))
    .finally(() => {
      // renderLoading(popupDeleteCardElement, false);
    });
  }
  
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    //method: condition ? 'PUT' : 'DELETE',

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

  return (
    <main className="page__main">
      <section className="profile">
        <div className="profile__edit">
          <div
            className="profile__avatar profile__avatar-button-edit" //src={data.avatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-nik">
            <h1 className="profile__info-name">{currentUser.name} </h1>
            <button
              aria-label="edit"
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__info-job">{currentUser.about}</p>
        </div>
        <button
          aria-label="add"
          type="button"
          className="profile__button-add"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        {
          cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
