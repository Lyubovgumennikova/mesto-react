import React from "react";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  data,
  cards,
  onCardClick,
}) {
  return (
    <main className="page__main">
      <section className="profile">
        <div className="profile__edit">
          <div
            className="profile__avatar profile__avatar-button-edit" //src={data.avatar}
            style={{ backgroundImage: `url(${data.avatar})` }}
            alt="аватар"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-nik">
            <h1 className="profile__info-name">{data.name} </h1>
            <button
              aria-label="edit"
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__info-job">{data.about}</p>
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
          // cards.map(({id, ...props}) => <Card key={props._id} {...props} />) //title="name" src="link"
          cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
