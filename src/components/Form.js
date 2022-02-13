import React from "react";

function Form({
  name,
  children,
  buttonText,
  isSubmitted,
  setIsSubmitted,
  onSubmit,
  handleFormSubmit,
  // handleSubmit,
  ...props
}) {
  // const [isSubmitted, setIsSubmitted] = useState (false);
  // function handleFormSubmit (e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();
  //   setIsSubmitted(true)
  //   handleSubmit()
  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   // onUpdateUser({
  //   //   name,
  //   //   about: description,
  //   // });
  // }
//onSubmit={onSubmit} onSubmit={handleFormSubmit}  onAddPlace={props.onAddPlace} props.value
  return (
    <form name={name} className="popup__content" onSubmit={handleFormSubmit} > 
      {children}
      <button type="submit" className="popup__submit-button">
        {/* {`${isSubmitted ? `Выполняется...`: buttonText}`} */}
        {isSubmitted ? "Выполняется..." : buttonText}
      </button>
      )
    </form>
  );
}

export default Form;
