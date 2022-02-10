import React from "react";

function Form({
  name,
  children,
  buttonText,
  handleSubmit,
  isLoading,
  onSubmit
}) {
  // const [isSubmitted, setIsSubmitted] = useState(false);
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
    <form name={name} className="popup__content" onSubmit={onSubmit}>
      {children}
      <button type="submit" className="popup__submit-button">
        {/* {`${isSubmitted ? `Выполняется...`: buttonText}`} */}
        {isLoading ? "Выполняется..." : buttonText}
      </button>
      )
    </form>
  );
}

export default Form;
