let inputs = document.querySelectorAll(".form-donacion input");
let feedback = document.querySelector(".feedback");

//Inputs - Datos personales
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let celular = document.getElementById("celular");

//Datos tarjeta
let numeroTarjeta = document.getElementById("numTar");
let vencimiento = document.getElementById("vencimiento");
let cvv = document.getElementById("cvv");


//Expresiones
let expresiones = {
    caracteresExp: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    celularExp: /^(?:(0\d{1})|\d{1})[9]\d{7}$/,
    emailExp: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    numeroTarjetaExp: /^([0-9]{16})$/,
    vencimientoTarjetaExp: /^([0-9]{2})\/([0-9]{2})$/,
    cvvTarjetaExp: /^([0-9]{3})$/
};

/^(?:(0\d{1})|\d{1})[9]\d{7}$/

const validarInput = (input, expresion) => {

    if (!expresion.test(input.value.replace(/\s+/g, ''))) {
        input.classList.add("invalido");
        input.classList.remove("valido");
        document.querySelector(`.${input.name} .feedback`).classList.add("invalido-feedback");
    } else {
        input.classList.remove("invalido");
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
        case "apellido":
            validarInput(apellido, expresiones.caracteresExp);
            break;
        case "email":
            validarInput(email, expresiones.emailExp);
            break;
        case "celular":
            validarInput(celular, expresiones.celularExp);
            break;
            //Datos pago
        case "numTar":
            validarInput(numeroTarjeta, expresiones.numeroTarjetaExp);
            break;
        case "vencimiento":
            validarInput(vencimiento, expresiones.vencimientoTarjetaExp);
            break;
        case "cvv":
            validarInput(cvv, expresiones.cvvTarjetaExp);
            break;
    }; 

    finalizarBoton();
};


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
});


const finalizarBoton = () => {
    let finalizarBtn = document.getElementById("finalizarBtn");

    if (nombre.value && apellido.value && email.value && celular.value && celular.value.length == 9 && numeroTarjeta.value && vencimiento.value && cvv.value) {
        finalizarBtn.disabled = false;

    } else {
        finalizarBtn.disabled = true;
    }

    if (nombre.value || apellido.value || email.value || celular.value) {
        document.getElementById("borrarBtn").disabled = false;
    } else {
        document.getElementById("borrarBtn").disabled = true;
    }
};


const borrarBoton = () => {
    document.querySelector(".form-donacion").reset();

    nombre.classList.remove("invalido");
    apellido.classList.remove("invalido");
    email.classList.remove("invalido");
    celular.classList.remove("invalido");
    numeroTarjeta.classList.remove("invalido");
    vencimiento.classList.remove("invalido");
    cvv.classList.remove("invalido");

    nombre.classList.remove("valido");
    apellido.classList.remove("valido");
    email.classList.remove("valido");
    celular.classList.remove("valido");
    numeroTarjeta.classList.remove("valido");
    vencimiento.classList.remove("valido");
    cvv.classList.remove("valido");

    document.querySelectorAll(".feedback").forEach((feedback) => {
        feedback.classList.remove("invalido-feedback");
    });
};


const realizarDonacion = (tipo, monto, nombre, apellido, email, celular, tarjeta, numTarj, vencimiento, cvv) => {
    let htmlContentToAppend = `
    <div id="detalle-content">
        <h6 class="titulo">Detalles de tu donación</h6>
        <div class="tipo-monto"> 
            <h6>Tipo y monto de donación:</h6>
            <p>Elegiste donarnos: <span>${tipo}</span></p>
            <p>Monto seleccionado: <span>$${monto}</span></p>
        </div>
        <div class="datos-donacion">
            <h6>Tus datos:</h6>
            <p>Nombre y apellido: <span>${nombre} ${apellido}</span></p>
            <p>Email*: <span>${email}</span></p>
            <p>celular: <span>${celular}</span></p>
            <small>*Recibirás por email todos los detalles de tu donación</small>
        </div>
        <div class="detalle-pago">
            <h6>Detalles del pago:</h6>
            <p>Tarjeta: <span>${tarjeta}</span></p>
            <p>Número: <span>${numTarj}</span></p>
        </div>
        <button class="home-btn">Volver al inicio</button>
    </div>
`;

    document.querySelector(".detalle-donacion").innerHTML = htmlContentToAppend;
};


//Eliminar clases de los inputs al resetar los inputs
const eliminarClaseInput = () => {
    nombre.classList.remove("valido");
    apellido.classList.remove("valido");
    email.classList.remove("valido");
    celular.classList.remove("valido");
    numeroTarjeta.classList.remove("valido");
    vencimiento.classList.remove("valido");
    cvv.classList.remove("valido");
    
    nombre.classList.remove("invalido");
    apellido.classList.remove("invalido");
    email.classList.remove("invalido");
    celular.classList.remove("invalido");
    numeroTarjeta.classList.remove("invalido");
    vencimiento.classList.remove("invalido");
    cvv.classList.remove("invalido");
};

//Borrar datos del formulario modal
document.querySelector(".borrar-btn").addEventListener("click", () => {
    document.querySelector(".borrar-form").style.display = "flex";
    document.querySelector(".msj-alerta").style.display = "flex";
});

//Confirmar borrar datos modal
document.querySelector(".borrar-datos-btn").addEventListener("click", () => {
    document.querySelector(".form-donacion").reset();

    document.querySelector(".borrar-form").style.display = "none";
    document.querySelector(".msj-alerta").style.display = "none";

    eliminarClaseInput();

    document.getElementById("borrarBtn").disabled = true;

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
    });
});


//Submit del formulario de donación
document.querySelector(".form-donacion").addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    document.getElementById("tipoModal").innerHTML = data.tipo;
    document.getElementById("montoModal").innerHTML = data.monto;
    document.querySelector(".modal-container").style.display = "flex";
    document.querySelector(".modal-box").style.display = "flex";

    document.querySelector(".confirmar-btn").addEventListener("click", () => {
        document.querySelector(".modal-box").style.display = "none";
        document.querySelector(".spinner-border").style.display = "block";

        setTimeout(() => {
            document.querySelector(".modal-container").style.display = "none";
            window.scrollTo(0, 0);
            realizarDonacion(data.tipo, data.monto, data.nombre, data.apellido, data.email, data.celular, data.tarjeta, data.numTar);
        }, 1500);

    });

});

document.querySelector(".cancelar-btn").addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "none";
});



/*Evento para volver al inicio*/
const detalleDonacion = document.querySelector(".detalle-donacion");

detalleDonacion.addEventListener('click', event => {
    if (event.target.matches(".home-btn")) {
        event.preventDefault();

        location.href = "index.html";
    }
});