import React from "react";

function PopupWithForm(props) {

  return (
    <>
      {/* className={`popup popup_type_${props.name}`}  */}
      <div className={`popup popup_type_${props.name}`}>
        <button
          className="popup__close popup__close_type_edit"
        />
        <div className="popup__container">
          <h2 className="popup__text">{props.title}</h2>
          <form name="info" className="popup__content" noValidate>
            {/* return <div>{this.props.children}</div> */}
            {/* <input
              type="text"
              name="nik"
              placeholder="Жак-Ив Кусто"
              id="nik"
              className="popup__input popup__input_prof_name"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="nik-error" className="popup__input-error"></span>
            <input
              type="text"
              name="job"
              placeholder="Исследователь океана"
              id="job"
              className="popup__input popup__input_prof_job"
              minLength="2"
              maxLength="200"
              required
            />
            <span id="job-error" className="popup__input-error"></span> */}
            {props.children}
            {/* {/* <span id="${props.id}-error" className="popup__input-error"></span> */}
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>) 
          </form>
        </div>
      </div>

      {/* <div className ="popup popup_type_new-card">
               <button
                 aria-label="cloce"
                 type="button"
                 className ="popup__close popup__close_type_new-card"
               ></button>
               <div className ="popup__container">
                 <h2 className ="popup__text">Новое место</h2>
                 <form
                   name="name"
                   className ="popup__content popup__content_type_new-card"
                   noValidate
                 >
                   <input
                     type="text"
                     name="name"
                     placeholder="Название"
                     id="name"
                     className ="popup__input popup__input_card_name"
                     minLength="2"
                     maxLength="30"
                     required
                   />
                   <span id="name-error" className ="popup__input-error"></span>
                   <input
                     type="url"
                     name="link"
                     id="link"
                     placeholder="Ссылка на картинку"
                     className ="popup__input popup__input_card_image"
                     required
                   />
                   <span id="link-error" className ="popup__input-error"></span>
                   <button type="submit" className ="popup__submit-button">
                     Создать
                   </button>
                 </form>
               </div>
             </div> */}
      {/* <div className ="popup popup_type_delete">
               <button
                 aria-label="cloce"
                 type="button"
                 className ="popup__close popup__close_type_delete"
               ></button>
               <div className ="popup__container">
                 <h2 className ="popup__text">Вы уверены?</h2>
                 <form name="name" className ="popup__content" noValidate>
                   <button type="submit" className ="popup__submit-button">
                     Да
                   </button>
                 </form>
               </div>
             </div> */}

      {/* <div className ="popup popup_type_avatar">
               <button
                 aria-label="cloce"
                 type="button"
                 className ="popup__close popup__close_type_avatar"
               ></button>
               <div className ="popup__container">
                 <h2 className ="popup__text">Обновить аватар</h2>
                 <form
                   name="name"
                   className ="popup__content popup__content_type_avatar"
                   noValidate
                 >
                   <input
                     type="url"
                     name="avatar"
                     id="avatar"
                     placeholder="Ссылка на изображение"
                     className ="popup__input popup__input_card_image"
                     required
                   />
                   <span id="avatar-error" className ="popup__input-error"></span>
                   <button type="submit" className ="popup__submit-button">
                     Сохранить
                   </button>
                 </form>
               </div>
             </div> */}
    </>
  );
}

export default PopupWithForm;
