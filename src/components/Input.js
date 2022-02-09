import React from "react";

function Input ({ type, placeholder, name, maxLength, value, handleChange}) {
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
      value={value}
      // ref={ref}
      required
    />
  );
}

export default Input;
