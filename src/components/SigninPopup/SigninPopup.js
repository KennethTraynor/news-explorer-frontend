import React, { useEffect } from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

import useFormWithValidation from '../../utils/validation';

function SigninPopup({ onClose, isOpen, onPopupBackgroundClick, onLinkClick }) {

    const initialValues = {email: '', password: ''};

    const { values, errors, isValid, resetForm, handleChange } = useFormWithValidation(initialValues);

    useEffect(() => {
        resetForm(initialValues);
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
            isFormInvalid={!isValid}
            onPopupBackgroundClick={onPopupBackgroundClick}
            handleSubmit={handleSubmit}
        >
            <div className='popup__field'>
                <label className='popup__input-label'>Email</label>
                <input
                    className='popup__input'
                    placeholder='Enter email'
                    type='email'
                    name='email'
                    required
                    value={values.email}
                    onChange={handleChange}
                />
                <span className='popup__input-error'>{errors.email}</span>
            </div>

            <div className='popup__field'>
                <label className='popup__input-label'>Password</label>
                <input
                    className='popup__input'
                    placeholder='Enter password'
                    type='password'
                    name='password'
                    required
                    value={values.password}
                    onChange={handleChange}
                />
                <span className='popup__input-error'>{errors.password}</span>
            </div>

            <span className='popup__form-error' >Form Error Text</span>

        </PopupWithForm>
    )
}

export default SigninPopup;