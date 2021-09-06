import React from 'react';

import './SignupPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignupPopup({ onClose, isOpen, onPopupBackgroundClick, onLinkClick, handleSignup }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignup();
    }

    return (
        <PopupWithForm
            popupType='signup'
            title='Sign up'
            submitText='Sign up'
            subtext='or '
            linkText='Sign in'
            onLinkClick={onLinkClick}
            onClose={onClose}
            isOpen={isOpen}
            onPopupBackgroundClick={onPopupBackgroundClick}
            handleSubmit={handleSubmit}
        >
            <div className='popup__field'>
                <label className='popup__input-label'>Email</label>
                <input id='signup-email' className='popup__input' placeholder='Enter email' type='email' name='email' required ></input>
                <span id='signup-email-error' className='popup__input-error'>Invalid email</span>
            </div>

            <div className='popup__field'>
                <label className='popup__input-label'>Password</label>
                <input id='signup-password' className='popup__input' placeholder='Enter password' type='password' name='password' required ></input>
                <span id='signup-password-error' className='popup__input-error'>Invalid password</span>
            </div>

            <div className='popup__field'>
                <label className='popup__input-label'>Username</label>
                <input id='signup-username' className='popup__input' placeholder='Enter your username' type='name' name='username' minLength='2' maxLength='30' required ></input>
                <span id='signup-username-error' className='popup__input-error'>Invalid username</span>
            </div>

            <span id='signup-form-error' className='popup__form-error'>Signup Error Text</span>

        </PopupWithForm>
    )
}

export default SignupPopup;