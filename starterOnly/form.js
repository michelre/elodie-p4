const form = document.querySelector('form')
const message = {
    first: "Le champs doit comporter entre 2 et 30 caractères,les caractères spéciaux ne sont pas autorisés.",
    last: "Le champs doit comporter entre 2 et 30 caractères,les caractères spéciaux ne sont pas autorisés.",
    email: "Veuillez entrer une adresse e-mail valide.",
    quantity: "Veuillez entrer un nombre valide (entre 1 et 99).",
    birthdate: "Vous devez être âgé d'au moins 18 ans pour vous inscrire.",
    location: "Veuillez sélectionner une ville.",
    userConditions: "Veuillez accepter les conditions d'utilisation."
};
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


//regex pour valider la quantité et empecher les lettre et les caractères speciaux
const validateQuantity = (field) => {
    const regexQuantity = /^([0-9]{1,2})$/;
    message.quantity;
    return regexQuantity.test(field.value);

}

//Fonction de validation de la ville choisie une ville doit etre choisie
const validateLocation = () => {
    //je recupère les radios
    const locationRadios = document.querySelectorAll('input[type="radio"][name="location"]');
    let isChecked = false;
    //je boucle sur les radios si une selectionné alors isChecked est vrai
    locationRadios.forEach((radio) => {
        if (radio.checked) {
            isChecked = true;
        }
    });
    message.location;
//je retourne isChecked
    return isChecked;
};

//Fonction de validation des conditions d'utilisations
const validateUserConditions = () => {
    //je recupère la checkbox
    const userConditions = document.querySelector('input[type="checkbox"][name="userConditions"]');
    //isChecked est faux
    let isChecked = false;
    //si la checkbox est coché alors isChecked est vrai
    if (userConditions.checked) {
        isChecked = true;
    }
    //je retourne isChecked
    message.userConditions;
    return isChecked; 
}

// const displayError = (field, isValid) => {
//     if(!isValid){
//         field.classList.add('error')
//     } else {
//         field.classList.remove('error')
//     }
    
// }

const displayError = (field, isValid) => {
    // Sélectionne la div parent .formData
    const formDataDiv = field.closest('.formData'); 
    //creation d'une div sous chaque champs en cas d'erreur
    const errorDiv = document.createElement('div');
   
    formDataDiv.appendChild(errorDiv);

  
    // Si le champ n'est pas valide
    if (!isValid) {
        // Ajoute l'attribut data-error-visible
        formDataDiv.setAttribute('data-error-visible', 'true');
        formDataDiv.appendChild(errorDiv);
        //ajouter la class data-error a la div
        // errorDiv.classList.add('form-data');
    } else {
        // Supprime l'attribut data-error-visible
        formDataDiv.removeAttribute('data-error-visible');
        formDataDiv.removeChild(errorDiv);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const first = e.target.first
    const last = e.target.last
    const email = e.target.email
    const quantity = e.target.quantity
    const birthdate = e.target.birthdate
    const location = e.target.location
    const userConditions = e.target.userConditions

    const isFirstValid = validateName(first)
    const isLastValid = validateName(last)
    const isEmailValid = validateEmail(email)
    const isQuantityValid = validateQuantity(quantity)
    const isBirthdateValid = validateBirthdate(birthdate)
    const isLocationValid = validateLocation(location)
    const isUserConditionsValid = validateUserConditions(userConditions)

    displayError(first, isFirstValid)
    displayError(last, isLastValid)
    displayError(email, isEmailValid)
    displayError(quantity, isQuantityValid)
    displayError(birthdate, isBirthdateValid)
    // displayError(location, isLocationValid)
    // displayError(userConditions, isUserConditionsValid)

   
    if(isFirstValid && isLastValid && isEmailValid && isQuantityValid && isBirthdateValid && isLocationValid && isUserConditionsValid){
        form.reset()
        hideModal()
        successModal()
    }
    else {
        closeModalSuccess()
    }
  
})