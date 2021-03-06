import React, { useCallback } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation(initialValues) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [formErrorText, setFormErrorText] = React.useState('');

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newFormErrorText = '') => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setFormErrorText(newFormErrorText);
    },
    [setValues, setErrors, setIsValid, setFormErrorText]
  );

  return { values, handleChange, errors, isValid, resetForm, setFormErrorText, formErrorText };
}

