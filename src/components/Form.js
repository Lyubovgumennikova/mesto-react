import React, { useState }  from "react";

function Form({children,buttonText,handleSubmit, isSubmitted, isLoading, onSubmit, ...props }) {
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
    <form name={props.name} className="popup__content" onSubmit={onSubmit} > 
      {children}
      <button type="submit" className="popup__submit-button">
      {/* {`${isSubmitted ? `Выполняется...`: buttonText}`} */}
      {
  isLoading //isSubmitted 
  ? 'Выполняется...'
   : buttonText
    
      }
        
       </button>
      )
    </form>
  );
}

export default Form;

// {`${!isLoading ? `Выполняется...`: buttonText}`}
