const form = document.querySelector('form')

//regex pour la validation du Nom et prénom
const validateName = (field) => {
    const regexName = /^([A-Za-z|\s]{2,30})?([-]{0,1})?([A-Za-z|\s]{2,30})$/;
    message.first;
    return regexName.test(field.value);  
}


//regex pour la validation de l'email 
const validateEmail = (field) => {
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    message.email;
    return regexEmail.test(field.value);
}


//Fonction de validation de la majorité
const validateBirthdate = (field) => {
    // je récupére la date de naissance 
    const birthdate = new Date(field.value);
    
    // je cree une date il y a 18 ans 
    const returneighteen = new Date();
    returneighteen.setFullYear(returneighteen.getFullYear() - 18);
    message.birthdate;
    // je compare la date de naissance avec il y a 18 ans
    return birthdate <= returneighteen;
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