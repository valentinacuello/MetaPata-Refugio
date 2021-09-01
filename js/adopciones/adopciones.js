let animalesEnAdopcion = [...arrayAnimales];


const galeria = () =>{
    let htmlContentToAppend = "";

    if(animalesEnAdopcion.length == 0){
        htmlContentToAppend = `<h6>No hay resultados</h6>`
    }

    for(let i = 0; i < animalesEnAdopcion.length; i++){
        htmlContentToAppend += `
            <div class="card">
                <div class="card-img">
                    <img src="img/Adopcion/${animalesEnAdopcion[i].img}.jpg">
                </div>
                <div class="card-body">
                    <h4>${animalesEnAdopcion[i].nombre}</h4>
                    <p>${animalesEnAdopcion[i].sexo} · ${animalesEnAdopcion[i].tamanio}</p>
                    <button class="mas-info" data-id="${animalesEnAdopcion[i].id}">Más info.</button>
                </div>
            </div>
        `
    }

    document.querySelector(".galeria").innerHTML = htmlContentToAppend;
};

galeria();

/*Filter Collapse Mobile*/
document.querySelector(".filter-btn").addEventListener("click", ()=>{
    document.querySelector(".filtros").classList.toggle("active-drop");
});

/*Filter*/
const filtrarAnimales = (especie, edad, sexo, color, tamanio) =>{
    let animalesFiltrados = animalesEnAdopcion.filter((animal)=>{
        if((animal.especie == especie || especie == "todos") &&
            (sexo == null || animal.sexo.toLowerCase() == sexo ) &&
            (color == null || animal.color.toLowerCase() == color) &&
            (tamanio == null || animal.tamanio.toLowerCase() == tamanio)){            

            if((edad == null) || (edad == "cachorro" && animal.edad < 2)||
            (edad == "joven" && animal.edad > 2 && animal.edad <= 4) ||
            (edad == "adulto" && animal.edad > 4 && animal.edad < 7) ||
            (edad == "senior" && animal.edad >= 7)
            ){
                return animal;
            }
        }
    });

    animalesEnAdopcion = animalesFiltrados;
    galeria();
};


document.querySelector(".dropdowns").addEventListener("submit", (event)=>{
    event.preventDefault();

    let formData = new FormData(event.target); //La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que 
                                                //representan los campos de un formulario y sus valores
                                                //The target property of the Event interface is a reference to the object onto which the event was dispatched
    let data = Object.fromEntries(formData);//El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
    console.log(data)
    
    animalesEnAdopcion = [...arrayAnimales];//Acá le asigno de nuevo como valor a la variable el array original, 
                                            //ya que si realizo un filtro y luego quiero volver a filtrar, lo hace sobre el array filtrado y por ende, hay cosas que no están
                                            //Entonces así, antes de ejecturar la función de filtrado, le re-asigna el valor a la variable del array original
    filtrarAnimales(data.especie, data.edad, data.sexo, data.color, data.tamanio);

    if(window.innerHeight < 767){
        document.querySelector(".filtros").classList.toggle("active-drop");
    }
});

document.querySelector(".delete-filter-btn").addEventListener("click", (event)=>{
    document.querySelector(".dropdowns").reset();
});

document.querySelectorAll(".mas-info").forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        let btnId = event.target.dataset.id;
        detalleAnimal(btnId);
        location.href = "animalDetalle.html";
    });    
});


