// Seleccion de la etiqueta a travez del atributo
const userNameField = document.querySelector('[name=username]'); 
const passwordField = document.querySelector('[name=password]'); 
const emailField = document.querySelector('[name=email]');
const fileField = document.querySelector('[name=file]');
const setErrors = (message,field, isError = true) => {
    if (isError) {
        field.classList.add('invalid');
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.textContent = message;
    } else {
        field.classList.remove('invalid');
        field.nextElementSibling.classList.remove('error');
        field.nextElementSibling.textContent = ``;
    }
} 



function fieldValidation(message,event) {
    const field = event.target; // Seleccionar el campo Input
    // const fieldID = event.target.id; // Seleccionar los ID dinamicamente de los Input
    const fieldValue = event.target.value.trim(); // Seleccionamos el valor de los Inputs

    // Validar si el campo esta vacio o no
    if (fieldValue.length === 0 ) {
        setErrors(message,field);
    } else {
        setErrors(message,field,false);
    }
    
}

// Funciona para validar Emails.
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value.trim();
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    
    if (fieldValue.length >= 5 && !regex.test(fieldValue))  {
        setErrors("Please enter a valid format",field);
    } else {
        setErrors("",field,false);
    }



}

userNameField.addEventListener('blur', (event) => fieldValidation("Add your username",event))
passwordField.addEventListener('blur', (event) => fieldValidation("Write your password",event))
emailField.addEventListener('blur', (event) => fieldValidation("Please provide your email",event))
emailField.addEventListener('input', validateEmailFormat);

fileField.addEventListener('change', (event) => {
    const field = event.target;
    const fileExt = event.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg","jpeg","png","gif"];
    if (!allowedExt.includes(fileExt)){
        setErrors(`The only extensions allewed are ${allowedExt.join(", ")}`,field);
    } else {
        setErrors("",field,false);
    }

})