let inputs = document.querySelectorAll(".form-contacto inputs");
let feedback = document.querySelector(".feedback");

//Inputs - Datos
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");

//Expresiones
let expresiones = {
    caracteresExp: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    emailExp: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    textareaExp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};


const validarInput = (input, expresion) => {

    if (!expresion.test(input.value)) {
        input.classList.add("error");
        input.classList.remove("valido");
        document.querySelector(`.${input.name} .feedback`).classList.add("invalido-feedback");
    } else {
        input.classList.remove("error");
        input.classList.add("valido");
        document.querySelector(`.${input.name} .feedback`).classList.remove("invalido-feedback");
    }

};


const validarFormulario = (event) => {
    switch (event.target.name) {
        //Datos personales
        case "nombre":
            validarInput(nombre, expresiones.caracteresExp);
            break;
        case "email":
            validarInput(email, expresiones.emailExp);
            break;
    }
};

document.querySelector(".form-contacto").addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario();
    
});