import React from "react";

function Form({children,buttonText,handleSubmit, onSubmit, isLoading, ...props }) {
  // function handleSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();
  // setIsLoading(true)
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
      {`${
          isLoading
            ? `Выполняется...`
            : buttonText
        }`}
       </button>
      )
    </form>
  );
}

export default Form;
