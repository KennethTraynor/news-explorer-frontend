import React from 'react';

import './PopupWithForm.css';
import Popup from '../Popup/Popup';

function PopupWithForm({ children, popupType, title, submitText, subtext, linkText, onLinkClick, onClose, isOpen, onPopupBackgroundClick, handleSubmit }) {
    return (
        <Popup popupType={popupType} title={title} onClose={onClose} isOpen={isOpen} onPopupBackgroundClick={onPopupBackgroundClick}>
            <form action='#' className='popup__form' name={popupType} onSubmit={handleSubmit}>
                {children}
                <button className='popup__submit-button' aria-label='submit' type='submit'>{submitText}</button>
            </form>
            <p className='popup__subtext'>{subtext}<button onClick={onLinkClick} className={'popup__subtext-link'}>{linkText}</button></p>
        </Popup>
    )
}

export default PopupWithForm;