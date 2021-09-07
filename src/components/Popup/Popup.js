import React from 'react';

import './Popup.css';

function Popup({ children, popupType, title, onClose, isOpen, onPopupBackgroundClick }) {
    return (
        <div className={`popup popup_type_${popupType}` + (isOpen ? ' popup_opened' : '')} onClick={onPopupBackgroundClick}>
            <div className={`popup__container popup__container_type_${popupType}`}>
                <button className='popup__close-button' aria-label='close' name='close' type='button' onClick={onClose}></button>
                <h2 className={`popup__title popup__title_type_${popupType}`}>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Popup;