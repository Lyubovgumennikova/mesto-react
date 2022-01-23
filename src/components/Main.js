import React, { useContext, useEffect, useState } from "react";
import api from "../utils/Api"

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  // const [userDataC, setUserDataC] = useState('');
  // const [userAvatar, setUserAvatar] = useState();
  
useEffect(() => {
  // const CurrentUserContext = createContext();
  const userData = api.getUserInfo()//.then(data => {
    // const user = props.userData;
    console.log (userData)
    // setUserDataC(userData)
  //  userAvatar = data.avatar;
  //   // userName  (data.name)
  // })
})
// const userAvatar = userData.avatar;
// const userData = useContext()
// // // useContext(() => {
  // console.log (user)
//  }, [])
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
            // style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-nik">
            <h1 className="profile__info-name">129</h1>
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
