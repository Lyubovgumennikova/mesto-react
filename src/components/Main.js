import React from "react";


function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  // const [isCustomCursor, setIsCustomCursor] = React.useState();

  // function handleChange() {
  //   setIsCustomCursor(!isCustomCursor);
  // }
  // {props.name}
  
    return (
      <main className="page__main">
        <section className="profile">
          <div className="profile__edit">
            <img src="#" alt="аватар" className="profile__avatar" />
            <button
                  aria-label="avatar-edit"
                  type="button"
                  className="profile__avatar-button-edit"
                  onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__info-nik">
              <h1 className="profile__info-name">Жак-Ив Кусто</h1>
              <button
                aria-label="edit"
                type="button"
                className="profile__button-edit"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__info-job">Исследователь океана</p>
          </div>
          <button
            aria-label="add"
            type="button"
            className="profile__button-add"
            onClick={onAddPlace}
          />
        </section>
        <section className="elements"></section>
      </main>
    );
}

export default Main;