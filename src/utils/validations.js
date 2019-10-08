const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength14 = maxLength(14)
const number = value => value && !/^\d+$/i.test(value) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18);
const length6 = value => value && value.length == 6 ? undefined : "Whoops! That doesnt look right";
const email = value =>
    value && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value) ?
        'Whoops! That doesn’t look right' : undefined
const alphanumeric = value =>
    value && /[^a-zA-Z0-9şŞıİçÇöÖüÜĞğ\- ]/i.test(value) ?
        "Error Message" : undefined
const password = value =>
    value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=+^$*.\[\]{}\(\)?\-"!@#%&\/\\,><':;|_~`]).{8,20}$/g.test(value) ?
        "Whoops! That doesn’t look right" : undefined
const normalizePhone = (value) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) {
        return onlyNums
    }
    if (onlyNums.length <= 7) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
}
const text = value =>
    value && !/^(([’‘’' -])?[a-zA-ZÀ-ßà-ÿĀ-ſ]){2,30}$/i.test(value) ?
        "Whoops! That doesn’t look right" : undefined
const firstCharacter = value =>
    value && !/^[a-zA-ZÀ-ßà-ÿĀ-ſ]/i.test(value) ?
        "Whoops! That doesn’t look right" : undefined
const lastCharacter = value =>
    value && !/[a-zA-ZÀ-ßà-ÿĀ-ſ]$/i.test(value) ?
        "Whoops! That doesn’t look right" : undefined
const duplicateCharacter = value =>
    value && /([’‘’'-\s])\1/i.test(value) ?
        "Whoops! That doesn’t look right" : undefined
const ukPhone = value =>
    value && !/^07[0-9]{9,9}$/i.test(value) ?
        "Please enter a valid UK mobile phone number" : undefined
export { required, email, alphanumeric, password, number, maxLength, normalizePhone, maxLength14, text, ukPhone, length6, firstCharacter, lastCharacter, duplicateCharacter };
