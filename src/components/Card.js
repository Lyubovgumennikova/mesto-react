import React from "react";

function Card(data) {
  // const handleClick = () => {
  //   onCardClick(data);
  // } 
  return (
    <article className="element">
      <button
        aria-label="remove"
        type="button"
        className="element__remove-button"
      ></button>
      <div className="element__mask-group" //src={data.link} 
      style={{ backgroundImage: `url(${data.link})` }}
      alt={data.name} 
       />
      <div className="element__rectangle">
        <h3 className="element__text">{data.name}</h3>
        <div className="element__like-container">
          <button
            aria-label="like"
            type="button"
            className="element__vector"
          />
          <span className="element__vector-container">{data.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
