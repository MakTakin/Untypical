export const onValidation = (user) => {
    let isValid = true
    isValid = user.name.trim() !== '' && isValid
    isValid = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(user.email) && isValid
    return isValid
}