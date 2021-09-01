const realizarDonacion = (tipo, monto, nombre, apellido, email, celular, tarjeta, numTarj, vencimiento, cvv) =>{
        let htmlContentToAppend = `
        <div id="detalle-content">
            <h6 class="titulo">Detalles de tu donación</h6>
            <div class="tipo-monto"> 
                <p>Elegiste donarnos: <span>${tipo}</span></p>
                <p>El monto que seleccionaste es de: <span>$${monto}</span></p>
            </div>

            <div class="datos-donacion">
                <h6>Tus datos:</h6>
                <p>Nombre y apellido: <span>${nombre} ${apellido}</span></p>
                <p>Email*: <span>${email}</span></p>
                <p>Celular: <span>${celular}</span></p>
                <small>*Recibirás por email todos los detalles de tu donación</small>
            </div>

            <div class="detalle-pago">
                <h6>Detalles del pago:</h6>
                <p>Tarjeta: ${tarjeta}</p>
                <p>Número: ${numTarj}</p>
            </div>
        </div>
    `;

    document.querySelector(".detalles-donacion").innerHTML = htmlContentToAppend;
};

document.querySelector(".form-donacion").addEventListener("submit", (event)=>{
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);
    console.log(data)
    realizarDonacion(data.tipo, data.monto, data.nombre, data.apellido, data.email, data.celular, data.tarjeta, data.numTar, data.vencimiento, data.cvv);
});

document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
    document.querySelector(".form-donacion").reset();

    let detalleContent = document.getElementById("detalle-content");
    document.querySelector(".detalles-donacion").removeChild(detalleContent);
});