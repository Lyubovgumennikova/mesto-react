import React from "react";

const Input = ({ type, placeholder, name, maxLength, onChange, value, ref }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      className="popup__input popup__input_prof_name"
      minLength="2"
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      ref={ref}
      required
    />
  );
}

export default Input;
