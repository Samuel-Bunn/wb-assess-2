
const closeX = document.querySelector('#close-form')
const submit = document.querySelector('#sign-up')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')


const closeForm = (evt) => {
    // change x to plus
    closeX.innerText = '+'
    // hide the body of the form by applying the hide class name
     document.querySelector('form').className = 'hide'
}

closeX.addEventListener('click', closeForm)

const submitForm = (evt) => {
    //prevent default
    evt.preventDefault()
    // check if user has given name input
    //if not, alert add red border to input 
    // check if user has given email input
    //if not alert add red border to input
    if ( nameInput.value === '' && emailInput.value === '') {
        nameInput.style.border = "2px solid red"
        emailInput.style.border = "2px solid red"
        alert('You must enter a name and an email address to subscribe!')
    } else if ( nameInput.value === '') {
        nameInput.style.border = "2px solid red"
        alert('Please enter a name to subscribe.')
    } else if ( emailInput.value === '') {
        emailInput.style.border = "2px solid red"
        alert('Please enter an email address to subscribe.')
    } else {
        alert('Thank you for subscribing!')
        evt.submit()
    }
    // console.log(nameInput.value)
    // console.log(evt)
}

submit.addEventListener('click', submitForm)