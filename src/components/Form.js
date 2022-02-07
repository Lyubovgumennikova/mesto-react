import React from "react";

function Form({children,buttonText,onSubmit, ...props }) {
  // function handleSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();
  //   handleFormSubmit()
  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   // onUpdateUser({
  //   //   name,
  //   //   about: description,
  //   // });
  // }

  return (
    <form name={props.name} className="popup__content" onSubmit={onSubmit} >
      {children}
      <button type="submit" className="popup__submit-button">
        {buttonText}
      </button>
      )
    </form>
  );
}

export default Form;

//onClick={onSubmit}  onSubmit   name={name} 
//onSubmit={onSubmit}
