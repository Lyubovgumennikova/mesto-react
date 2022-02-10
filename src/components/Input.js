import React from "react";

function Input ({ type, placeholder, name, maxLength, handleChange, ...props}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      className="popup__input popup__input_prof_name"
      minLength="2"
      maxLength={maxLength}
      // onChange={onChange}
      onChange={e => handleChange(e.target.value)}
      value={props.value}
      ref={props.ref}
      required
    />
  );
}

export default Input;
