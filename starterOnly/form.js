const form = document.querySelector('form')

const validateName = (field) => {
  
}


const validateEmail = (field) => {
  
}


const validateBirthdate = (field) => {

}


const validateQuantity = (field) => {
   
}

const validateLocation = () => {
    
} 

const validateCGU = () => {

}

const displayError = (field, isValid) => {
    if(!isValid){
        field.classList.add('error')
    } else {
        field.classList.remove('error')
    }
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const first = e.target.first
    const last = e.target.last
    const email = e.target.email
    const quantity = e.target.quantity

    const isFirstValid = validateName(first)
    const isLastValid = validateName(last)
    const isEmailValid = validateEmail(email)
    const isQuantityValid = validateQuantity(quantity)

    displayError(first, isFirstValid)
    displayError(last, isLastValid)
    displayError(email, isEmailValid)

    if(isFirstValid && isLastValid && isEmailValid){
        form.reset()
        hideModal()
        /**
         * Afficher la modal de succès
         */
    }
})