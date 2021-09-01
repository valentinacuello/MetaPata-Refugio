let detallesAnimales = [...arrayAnimales];

const detalleAnimal = (idAnimal) =>{
    let htmlContentToAppend = "";

    for(let i = 0; i < detallesAnimales.length; i++){
        if(idAnimal == detallesAnimales[i].id){
            htmlContentToAppend = `
                <img src="/img/Adopcion/animal-1.jpg">
                <div class="info-body">
                    <div class="titulo">
                        <h1 class="nombre">¡Hola! ${detallesAnimales.nombre}</h1>
                        <img src="/img/seperador.svg" class="img">
                    </div>
                    <div class="detalles">
                        <div class="edad">
                            <h6>Edad</h6>
                            <p>6 años</p>
                        </div>
                        <div class="sexo">
                            <h6>Sexo</h6>
                            <p>Macho</p>
                        </div>
                        <div class="color">
                            <h6>Color</h6>
                            <p>Marrón</p>
                        </div>
                        <div class="tamanio">
                            <h6>Tamaño</h6>
                            <p>Mediano</p>
                        </div>
                    </div>
                    <div class="historia">
                        <p>Bandido es un perrito adulto muy dulce. Se lleva muy bien con otros perros y niños, no así con gatos. Es súper tranquilo y compañero por lo que es ideal para una persona mayor.</p>
                    </div>
                </div>
            `;
        }
    }
    

    document.querySelector(".info-detalle").innerHTML = htmlContentToAppend;
    
};


detalleAnimal();


