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
    celularExp: /^([0-9]{9})$/,
    emailExp: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    // correoExp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeroTarjetaExp: /^([0-9]{16})$/,
    vencimientoTarjetaExp: /^([\/0-9]{2})\/([\/0-9]{2})$/,
    cvvTarjetaExp: /^([0-9]{3})$/
};


const validarInput = (input, expresion) => {

    if (!expresion.test(input.value.replace(/\s+/g, ''))) {
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
    }

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


const borrarBoton = (input) => {
    document.querySelector(".form-donacion").reset();

    nombre.classList.remove("error");
    apellido.classList.remove("error");
    email.classList.remove("error");
    celular.classList.remove("error");
    numeroTarjeta.classList.remove("error");
    vencimiento.classList.remove("error");
    cvv.classList.remove("error");

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



document.getElementById("borrarBtn").addEventListener("click", borrarBoton);

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
            window.scrollTo(0,0);
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