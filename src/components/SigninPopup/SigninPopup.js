import React, { useEffect } from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

import { validateEmail, validateLength } from '../../utils/validation';

function SigninPopup({ onClose, isOpen, onPopupBackgroundClick, onLinkClick }) {

    const defaultErrorsState = { email: '', password: ''};
    const [isFormInvalid, setFormInvalid] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [inputErrors, setInputErrors] = React.useState(defaultErrorsState);

    useEffect(() => {
        if (isOpen) {
            setEmail('');
            setPassword('');
            setInputErrors(defaultErrorsState);
            setFormInvalid(true);
        }
    }, [isOpen])

    useEffect(() => {
        setFormInvalid(Object.keys(inputErrors).length > 0);
    }, [inputErrors])

    const removeError = (name) => {
        const inputErrorsCopy = { ...inputErrors };
        delete inputErrorsCopy[name];
        setInputErrors(inputErrorsCopy);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                if (validateEmail(value)) {
                    removeError(name);
                } else {
                    setInputErrors({ ...inputErrors, [name]: 'Invalid Email' });
                }
                break;
            case 'password':
                setPassword(value);
                if (value) {
                    removeError(name);
                } else {
                    setInputErrors({ ...inputErrors, [name]: 'Invalid Password' });
                }
                break;
            default:
                break;
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormInvalid) {
            return;
        }

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
            isFormInvalid={isFormInvalid}
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
                    value={email}
                    onChange={handleChange}
                />
                <span className='popup__input-error'>{inputErrors.email}</span>
            </div>

            <div className='popup__field'>
                <label className='popup__input-label'>Password</label>
                <input
                    className='popup__input'
                    placeholder='Enter password'
                    type='password'
                    name='password'
                    required
                    value={password}
                    onChange={handleChange}
                />
                <span className='popup__input-error'>{inputErrors.password}</span>
            </div>

            <span className='popup__form-error' >Form Error Text</span>

        </PopupWithForm>
    )
}

export default SigninPopup;