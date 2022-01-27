import React, { useEffect } from "react";

const Popup = ({ name, children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }`}
      onClick={handleOverlayClose}
    >
      <div
        className={`${
          name === "image"
            ? `popup__container_type_image`
            : `popup__container`
        }`}
      >
      <button
        className="popup__close" //
        type="button"
        onClick={onClose}
      />
      {children}
      </div>
    </div>
  );
};

export default Popup;
