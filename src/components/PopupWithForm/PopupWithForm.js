import React from 'react';

import Popup from '../Popup/Popup';

function PopupWithForm({ children, popupType, title, submitText, subtext, linkText, onLinkClick, onClose, isOpen, onPopupBackgroundClick, handleSubmit, isFormInvalid }) {
    return (
        <Popup popupType={popupType} title={title} onClose={onClose} isOpen={isOpen} onPopupBackgroundClick={onPopupBackgroundClick}>
            <form action='#' className='popup__form' name={popupType} onSubmit={handleSubmit}>
                {children}
                <button className='popup__submit-button' aria-label='submit' type='submit' disabled={isFormInvalid}>{submitText}</button>
            </form>
            <p className='popup__subtext'>{subtext}<span onClick={onLinkClick} className={'popup__subtext-link'}>{linkText}</span></p>
        </Popup>
    )
}

export default PopupWithForm;