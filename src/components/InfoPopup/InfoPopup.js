import React from 'react';

import Popup from '../Popup/Popup';

function InfoPopup({ onClose, isOpen, onPopupBackgroundClick, onLinkClick, linkText, message }) {

    return (
        <Popup popupType='info' onClose={onClose} isOpen={isOpen} onPopupBackgroundClick={onPopupBackgroundClick} title={message}>
            <span onClick={onLinkClick} className={'popup__subtext-link popup__subtext-link_type_info'}>{linkText}</span>
        </Popup>
    )
}

export default InfoPopup;