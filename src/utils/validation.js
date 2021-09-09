export const validateEmail = (value) => {
    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailRegex.test(value);
}

export const validateLength = (value, minLength=1, maxLength) => {
    let result = value.length >= minLength;
    if(maxLength) {
        result = result && value.length <= maxLength;
    }
    return result;
}