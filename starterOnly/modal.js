function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const ModalSuccess = document.querySelector('#modal-success');
const closeSuccess = document.querySelector('#closeSuccess');
const closeForm = document.querySelector('#closeForm');
const btnCloseSucces = document.querySelector('#btn-close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ouverture de la modal formulaire
function launchModal() {
  modalbg.style.display = "block";
}

function hideModal() {
  modalbg.style.display = "none";
}

function successModal() {
  ModalSuccess.style.display = "block"; 
}

//fermeture de la modale formulaire
closeForm.addEventListener("click", closeModalForm);

function closeModalForm() {
  modalbg.style.display = "none";
}

//fermeture de la modale de succes
closeSuccess.addEventListener("click", closeModalSuccess);

function closeModalSuccess() {
  ModalSuccess.style.display = "none";
}
//fermeture de la modale avec le btn fermer
btnCloseSucces.addEventListener("click", closeModalSuccess);

function closeModalSuccess() {
  ModalSuccess.style.display = "none";
}
