import React from "react";

function Form({name,children,buttonText,onSubmit,}) {
  return (
    <form name={name} className="popup__content" onSubmit={onSubmit}>
      {children}
      <button type="submit" className="popup__submit-button">
        {buttonText}
      </button>
      )
    </form>
  );
}

export default Form;

//onClick={onSubmit}  onSubmit   name={name} 
//onSubmit={onSubmit}
