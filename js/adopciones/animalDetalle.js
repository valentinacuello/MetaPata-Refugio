const detalleAnimal = (animalDetalles) => {
    var params = new URLSearchParams(location.search);
    var nameURL = params.get('animal');

    let htmlContentToAppend = "";

    for (let i = 0; i < animalDetalles.length; i++) {
        
        if (nameURL == animalDetalles[i].nombre) {
            htmlContentToAppend = `
                <img src="/img/Adopcion/${animalDetalles[i].img}.jpg" class="detalle-img">
                <div class="info-body">
                    <div class="titulo">
                        <h1 class="nombre">¡Hola! Soy ${animalDetalles[i].nombre}</h1>
                        <img src="/img/seperador.svg" class="img">
                    </div>
                    <div class="detalles">
                        <div class="edad">
                            <h3>Edad:</h3>
                            <p>${animalDetalles[i].edad}</p>
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
        }
    };

    document.querySelector(".detalle-content").innerHTML = htmlContentToAppend;

    console.log(nameURL)

};

/*Validar formulario de adopción*/


let formulario = document.querySelector(".form-adopcion");
let inputs = document.querySelectorAll(".form-adopcion input");

const validarInput = (input, id) =>{
    if(input.value != null){
        document.getElementById(`${id}`).classList.add("ok");
    }else{
        document.getElementById(`"${id}"`).classList.add("error");
    }
}

const validarFormulario = (event) =>{
    switch(event.target.name){
        case "nombre":
            validarInput(event.target, "nombre");
        break;
    }
};

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    validarInput(event);
});




document.addEventListener("DOMContentLoaded", ()=> {
    const getAnimalData = () => {
        $.get("js/animales.json", (response) => {
            detalleAnimal(response)
        });
    };

    getAnimalData();
});