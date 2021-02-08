const form = document.querySelector('#form')
const userNameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#password-confirmation')
const termsInput = document.querySelector('#terms')

//console.log('test')


// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener('submit', e =>
{
    e.preventDefault()
    const errorMessages = []
    //validations:
    if (userNameInput.value.length < 6)
    {
        errorMessages.push('Username must be at least 6 characters')
    }
    

    console.log(errorMessages)
})



// TODO: Define this function
function clearErrors()
{

}

// TODO: Define this function
function showErrors(errorMessages)
{
    // Add each error to the error-list element
    // Make sure to use an li as the element for each error
    // Also, make sure you add the show class to the errors container
}
