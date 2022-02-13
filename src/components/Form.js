import React from "react";

function Form({
  name,
  children,
  buttonText,
  isSubmitted,
  onSubmit,
  // ...props
}) {
  // const [isSubmitted, setIsSubmitted] = useState (false);
  // function handleFormSubmit (e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();
  //   setIsSubmitted(true)
  //   handleSubmit()
  // }
  
  return (
    <form name={name} className="popup__content" onSubmit={onSubmit}>
      {children}
      <button type="submit" className="popup__submit-button">
        {isSubmitted ? "Выполняется..." : buttonText}
      </button>
      )
    </form>
  );
}

export default Form;
