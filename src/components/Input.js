import React from "react";

function Input({ type, placeholder, name, maxLength }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      className="popup__input popup__input_prof_name"
      minLength="2"
      maxLength={maxLength}
      // onChange={}
      required
    />
  );
}

export default Input;
