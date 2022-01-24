import React from "react";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <article className="element">
      <button
        aria-label="remove"
        type="button"
        className="element__remove-button"
      ></button>
      <div
        className="element__mask-group" //src={card.link}
        style={{ backgroundImage: `url(${card.link})` }}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__rectangle">
        <h3 className="element__text">{card.name}</h3>
        <div className="element__like-container">
          <button aria-label="like" type="button" className="element__vector" />
          <span className="element__vector-container">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
