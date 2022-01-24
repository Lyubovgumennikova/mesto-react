import React from "react";

function ImagePopup({ card, onClose, onCardClick }) {
  return (
    <div
      className={`${
        onCardClick && card.link
          ? `popup popup_type_image popup_opened`
          : `popup popup_type_image `
      }`}
    >
      <div className="popup__image">
        <button
          aria-label="cloce"
          type="button"
          className="popup__close popup__close_type_image"
          onClick={onClose}
        />
        <figure name="image" className="popup__content-image">
          <img className="popup__mask-group" src={card.link} alt={card.name} />
          <figcaption className="popup__text-image">{card.name} </figcaption>
        </figure>
      </div>
    </div>
  );
}
// ImagePopup.propTypes = {card.link};
export default ImagePopup;
