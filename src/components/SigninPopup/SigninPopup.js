import React from 'react';

import './SigninPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SigninPopup({ onClose, isOpen, onPopupBackgroundClick, onLinkClick }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <PopupWithForm
            popupType='signin'
            title='Sign in'
            submitText='Sign in'
            subtext='or '
            linkText='Sign up'
            onLinkClick={onLinkClick}
            onClose={onClose}
            isOpen={isOpen}
            onPopupBackgroundClick={onPopupBackgroundClick}
            handleSubmit={handleSubmit}
        >
            <div className='popup__field'>
                <label className='popup__input-label'>Email</label>
                <input id='signin-email' className='popup__input' placeholder='Enter email' type='email' name='email' required ></input>
                <span id='signin-email-error' className='popup__input-error'>Invalid email</span>
            </div>

            <div className='popup__field'>
                <label className='popup__input-label'>Password</label>
                <input id='signin-password' className='popup__input' placeholder='Enter password' type='password' name='password' required ></input>
                <span id='signin-password-error' className='popup__input-error'>Invalid password</span>
            </div>

            <span id='signin-form-error' className='popup__form-error'>Signin Error Text</span>

        </PopupWithForm>
    )
}

export default SigninPopup;