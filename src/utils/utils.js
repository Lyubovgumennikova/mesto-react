export const renderLoading = (popup, isLoading, buttonText ) => {
    const currentActiveButton = popup.querySelector(`.popup__submit-button`);
    if (isLoading) {
        currentActiveButton.textContent = "Выполняется...";
    } else {
        // currentActiveButton('reset')
        currentActiveButton.textContent = buttonText
    }
};
