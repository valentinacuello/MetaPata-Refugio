//Formulario adopción
let inputs = document.querySelectorAll(".form-adopcion input");

//Inputs - Datos personales
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let direccion = document.getElementById("direccion");
let barrio = document.getElementById("barrio");
let email = document.getElementById("email");
let celular = document.getElementById("celular");

//Expresión
let expresiones = {
    caracteresExp: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    direccionExp: /^[a-zA-Z0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:\s[\]]{3,}$/,
    celularExp: /^([0-9]{9})$/,
    emailExp: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
};

const detalleAnimal = (animalDetalles) => {
    var params = new URLSearchParams(location.search);
    var nameURL = params.get('animal');

    let htmlContentToAppend = "";

    for (let i = 0; i < animalDetalles.length; i++) {

        if (nameURL == animalDetalles[i].nombre) {
            htmlContentToAppend = `
                <img src="../img/Adopcion/${animalDetalles[i].img}.jpg" class="detalle-img" alt="Foto de ${animalDetalles[i].nombre}, ${animalDetalles[i].especie} ${animalDetalles[i].sexo} de ${animalDetalles[i].edad} años"> 
                <div class="info-body">
                    <div class="titulo">
                        <h1 class="nombre">¡Hola! Soy ${animalDetalles[i].nombre}</h1>
                        <img src="../img/seperador.svg" class="separador">
                    </div>
                    <div class="detalles">
                        <div class="edad">
                            <h3>Edad:</h3>
                            <p>${animalDetalles[i].edad} años</p>
                        </div>
                        <div class="sexo">
                            <h3>Sexo:</h3>
                            <p>${animalDetalles[i].sexo}</p>
                        </div>
                        <div class="color">
                            <h3>Color:</h3>
                            <p>${animalDetalles[i].color}</p>
                        </div>
                        <div class="tamano">
                            <h3>Tamaño:</h3>
                            <p>${animalDetalles[i].tamano}</p>
                        </div>
                    </div>
                    <div class="historia">
                        <h3>Mi historia: </h3>
                        <p>${animalDetalles[i].historia}</p>
                    </div>
                </div>
            `;

            document.getElementById("animalActual").innerText = animalDetalles[i].nombre;
        }

    };

    document.querySelector(".detalle-content").innerHTML = htmlContentToAppend;
};

//Validar form Adopción
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
        case "nombre":
            validarInput(nombre, expresiones.caracteresExp);
            break;
        case "apellido":
            validarInput(apellido, expresiones.caracteresExp);
            break;
        case "direccion":
            validarInput(direccion, expresiones.direccionExp);
            break;
        case "barrio":
            validarInput(barrio, expresiones.direccionExp);
            break;
        case "email":
            validarInput(email, expresiones.emailExp);
            break;
        case "celular":
            validarInput(celular, expresiones.celularExp);
            break;
    };

    enviarSolicitud();
};

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
});

//Limpiar campos form
const borrarBtn = () => {

    document.querySelector(".form-adopcion").reset();

    nombre.classList.remove("valido");
    apellido.classList.remove("valido");
    direccion.classList.remove("valido");
    barrio.classList.remove("valido");
    email.classList.remove("valido");
    celular.classList.remove("valido");

    nombre.classList.remove("error");
    apellido.classList.remove("error");
    direccion.classList.remove("error");
    barrio.classList.remove("error");
    email.classList.remove("error");
    celular.classList.remove("error");

    document.querySelectorAll(".feedback").forEach((feedback) => {
        feedback.classList.remove("invalido-feedback");
    });
};

//Finalizar solicitud
const enviarSolicitud = () => {
    let enviarBtn = document.querySelector(".enviar-btn");

    if (nombre.value && apellido.value && direccion.value && barrio.value && email.value && celular.value && celular.value.length == 9) {
        enviarBtn.disabled = false;

    } else {
        enviarBtn.disabled = true;
    }

    if (nombre.value || apellido.value || direccion.value || barrio.value || email.value || celular.value) {
        document.querySelector(".borrar-btn").disabled = false;
    } else {
        document.querySelector(".borrar-btn").disabled = true;
    }
};

//Eliminar clases de los inputs al resetar los inputs
const eliminarClaseInput = () => {
    nombre.classList.remove("valido");
    apellido.classList.remove("valido");
    direccion.classList.remove("valido");
    barrio.classList.remove("valido");
    email.classList.remove("valido");
    celular.classList.remove("valido");
};

//Borrar datos del formulario modal
document.querySelector(".borrar-btn").addEventListener("click", () => {
    document.querySelector(".borrar-form").style.display = "flex";
    document.querySelector(".msj-alerta").style.display = "flex";
});

//Confirmar borrar datos modal
document.querySelector(".borrar-datos-btn").addEventListener("click", () => {
    document.querySelector(".form-adopcion").reset();

    document.querySelector(".borrar-form").style.display = "none";
    document.querySelector(".msj-alerta").style.display = "none";
    
    //Resetea el formulario
    document.querySelector(".form-adopcion").reset();
    eliminarClaseInput();

    //Deshabilito nuevamente los botones
    document.querySelector(".borrar-btn").disabled = true;
    document.querySelector(".enviar-btn").disabled = true;

});

//Cancelar borrar datos modal
document.querySelector(".cancelar-borrar-btn").addEventListener("click", () => {
    document.querySelector(".borrar-form").style.display = "none";
    document.querySelector(".msj-alerta").style.display = "none";
});


//Cerrar Modal de error
document.querySelectorAll(".cerrar-modal").forEach((btnCerrar) => {
    btnCerrar.addEventListener("click", () => {
        let modals = document.querySelectorAll(".modal-container");

        modals.forEach((modal) => {
            modal.style.display = "none";
        });

        document.querySelector(".form-adopcion").reset();
        eliminarClaseInput();

    });
});


//Enviar formulario
document.querySelector(".form-adopcion").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".modal-container").style.display = "flex";
    document.querySelector(".spinner-border").style.display = "block";


    setTimeout(() => {
        document.querySelector(".spinner-border").style.display = "none";
        document.querySelector(".modal-box").style.display = "flex";
    }, 1500);

});

document.addEventListener("DOMContentLoaded", () => {
    const getAnimalData = () => {
        $.get("js/animales.json", (response) => {
            detalleAnimal(response);
        });
    };

    getAnimalData();
});