const form = document.querySelector('#form')
const userNameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#password-confirmation')
const termsInput = document.querySelector('#terms')
const errorsContainer = document.querySelector('.errors')
const errorList = document.querySelector('.errors-list')


form.addEventListener('submit', e =>
{
    const errorMessages = []
    if (userNameInput.value.length < 6)
    {
        errorMessages.push('Username must be at least 6 characters')
    }

    if (passwordInput.value.length < 10)
    {
        errorMessages.push('Password should have at least 6 characters')
    }

    if (passwordConfirmInput.value !== passwordInput.value)
    {
        errorMessages.push('Password must match')
    }

    if (!termsInput.checked)
    {
        errorMessages.push('You must accept the terms')
    }

    if (errorMessages.length > 0)
    {
        e.preventDefault()
        showErrors(errorMessages)
    }

})


function clearErrors()
{
    while (errorList.children[0] != null)
    {
        errorList.removeChild(errorList.children[0])
    }
    errorsContainer.classList.remove('show')
}

function showErrors(errorMessages)
{
    clearErrors()
    errorMessages.forEach(mess =>
    {
        const li = document.createElement('li')
        li.innerText = mess
        errorList.appendChild(li)
    })

    errorsContainer.classList.add('show')
}
