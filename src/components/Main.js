import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userData, setUserData] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const userInfoData = [api.getUserInfo(), api.getInitialCards()];
    Promise.all(userInfoData)
      .then(([userData, items]) => {
        setCards(items);
        setUserData(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="page__main">
      <section className="profile">
        <div className="profile__edit">
          <div
            className="profile__avatar profile__avatar-button-edit" //src={data.avatar}
            style={{ backgroundImage: `url(${userData.avatar})` }}
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-nik">
            <h1 className="profile__info-name">{userData.name} </h1>
            <button
              aria-label="edit"
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__info-job">{userData.about}</p>
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
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
