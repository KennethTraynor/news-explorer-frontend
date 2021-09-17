import React, { useEffect } from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

import { useFormWithValidation } from '../../utils/formControllers';

function SignupPopup({ onClose, isOpen, onPopupBackgroundClick, onLinkClick, onRegister }) {

    const initialValues = { email: '', password: '', username: '' };
    const [isSubmitting, setSubmitting] = React.useState(false);

    const { values, errors, isValid, resetForm, handleChange, setFormErrorText, formErrorText } = useFormWithValidation(initialValues);

    useEffect(() => {
        resetForm(initialValues);
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        onRegister({ password: values.password, email: values.email, name: values.username }, setFormErrorText, setSubmitting);
    };

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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                />
                <span className='popup__input-error'>{errors.password}</span>
            </div>

            <div className='popup__field'>
                <label className='popup__input-label'>Username</label>
                <input
                    className='popup__input'
                    placeholder='Enter your username'
                    type='text'
                    name='username'
                    required
                    minLength='2'
                    maxLength='30'
                    value={values.username}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                <span className='popup__input-error'>{errors.username}</span>
            </div>

            <span className='popup__form-error' >{formErrorText}</span>

        </PopupWithForm>
    )
}

export default SignupPopup;