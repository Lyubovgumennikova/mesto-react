import React from "react"; //, { useContext, useEffect, useState }
// import api from "../utils/Api"
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, data, cards}) {
  // const [userDataC, setUserDataC] = useState('');
  // const [userAvatar, setUserAvatar] = useState();
  

// const userAvatar = userData.avatar;
// const userData = useContext()
// // // useContext(() => {
  // console.log (user)
//  }, [])
  return (
    <main className="page__main">
      <section className="profile">
        <div className="profile__edit">
          <img className="profile__avatar" src={data.avatar}
          // style={{ backgroundImage: `url(${data.avatar})` }}
          alt="аватар"
          />
          <button
            aria-label="avatar-edit"
            type="button"
            className="profile__avatar-button-edit"
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
            cards.map(({id, ...props}) => <Card key={props._id} {...props} />) //title="name" src="link" 
          // cards.map((card) => (<Card key={card._id} card={card} />)) //title="name" src="link" 
        } 
      </section>
    </main>
  );
}

export default Main;
