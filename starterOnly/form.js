const form = document.querySelector('form')

const validateName = (field) => {
   const regexName = /^([A-Za-z|\s]{2,30})?([-]{0,1})?([A-Za-z|\s]{2,30})$/;
   return regexName.test(field.value);
}


const validateEmail = (field) => {
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    return regexEmail.test(field.value);
}


const validateBirthdate = (field) => {
    // Récupérer la date de naissance 
    const birthdate = new Date(field.value);
    
    // Créer une date il y a 18 ans à partir de la date actuelle
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    
    // Comparer la date de naissance avec il y a 18 ans
    return birthdate <= eighteenYearsAgo;
}


const validateQuantity = (field) => {
    const regexQuantity = /^([0-9]{1,2})$/;
   return regexQuantity.test(field.value);
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