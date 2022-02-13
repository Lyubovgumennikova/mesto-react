import React from "react";
import Popup from "./Popup";
import Form from "./Form";

function PopupWithForm({ children, isOpen, onClose, ...props }) {
const handleFormSubmit = (e)  => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    props.setIsSubmitted(true)
    props.handleSubmit()
    // props.setIsSubmitted(false)
    // Передаём значения управляемых компонентов во внешний обработчик
    // onUpdateUser({
    //   name,
    //   about: description,
    // });
  }

  return (
    <Popup isOpen={isOpen} name={props.name} onClose={onClose}>
      <h2 className="popup__text">{props.title}</h2>
      <Form
        name={props.name}
        buttonText={props.buttonText}
        // handleFormSubmit={props.handleFormSubmit}
        // handleSubmit={props.handleSubmit}
        // onSubmit={props.onSubmit}
        isSubmitted={props.isSubmitted}
        setIsSubmitted={props.setIsSubmitted}
        // handleChange={props.handleChange}
        // onAddPlace={props.onAddPlace}
        // handleAddPlaceSubmit={props.handleAddPlaceSubmit}
        handleFormSubmit={handleFormSubmit}
      >
        {children}
      </Form>
    </Popup>
  );
}

export default PopupWithForm;
