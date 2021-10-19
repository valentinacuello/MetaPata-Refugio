let inputs = document.querySelectorAll(".form-contacto input");
let textAreaInput = document.querySelector(".form-contacto textarea");
let feedback = document.querySelector(".feedback");

//Inputs - Datos
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");

//Expresiones
let expresiones = {
    caracteresExp: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    emailExp: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
};


const validarInput = (input, expresion) => {

    if (!expresion.test(input.value)) {
        input.classList.add("invalido");
    } else {
        input.classList.remove("invalido");
    }

};

const validarTextArea = (input) => {

    if (input.value) {
        input.classList.remove("invalido");
    } else {
        input.classList.add("invalido");
    }

};

const validarFormulario = (event) => {
    switch (event.target.name) {
        case "nombre":
            validarInput(nombre, expresiones.caracteresExp);
            break;

        case "email":
            validarInput(email, expresiones.emailExp);
            break;

        case "textarea":
            validarTextArea(textarea);
            break;
    };
};


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
});

textAreaInput.addEventListener("keyup", validarFormulario);


//Enviar mensaje de contacto
document.querySelector(".form-contacto").addEventListener("submit", (event) => {
    event.preventDefault();

    if (nombre.value && email.value && textarea.value) {
        document.querySelector(".modal-container").style.display = "flex";
        document.querySelector(".modal-box").style.display = "flex";
        document.querySelector(".error-contacto").classList.remove("error-activo");

    } else {
        document.querySelector(".error-contacto").classList.add("error-activo");
        nombre.classList.add("invalido");
        email.classList.add("invalido");
        textarea.classList.add("invalido");
    }

});

//Cerrar modal
document.querySelector(".cerrar-modal").addEventListener("click", () => {
    document.querySelector(".modal-box").style.display = "none";
    document.querySelector(".spinner-border").style.display = "block";

    //Resetea el formulario
    setTimeout(() => {
        document.querySelector(".modal-container").style.display = "none";
        document.querySelector(".form-contacto").reset();
    }, 500);
});