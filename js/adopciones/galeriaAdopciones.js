let animalesJSONData = [];


const cardAnimal = (array) => {
    let htmlContentToAppend = "";

    if (array.length == 0) {
        htmlContentToAppend = `<div class="error-container"><img src="img/error.png" class="error-img"></div>`
    }

    for (let i = 0; i < array.length; i++) {
        htmlContentToAppend += `
            <div class="card">
                <div class="card-img">
                    <img src="../img/Adopcion/${array[i].img}.jpg" alt="Foto de ${array[i].nombre}, ${array[i].especie} ${array[i].sexo} de ${array[i].edad} años">
                </div>
                <div class="card-body">
                    <h4>${array[i].nombre}</h4>
                    <p>${array[i].sexo} · ${array[i].tamano}</p>
                    <button class="mas-info" data-id="${array[i].id}">Más info. <i class="bi bi-arrow-right"></i></button>                    
                </div>
            </div>
        `
    };

    document.querySelector(".galeria").innerHTML = htmlContentToAppend;
};

/*Evento para que los botones vayan a la página de cada animal*/
const galeria = document.querySelector(".galeria");

galeria.addEventListener('click', event => {
    if (event.target.matches(".mas-info")) {
        event.preventDefault();

        let btnTarget = event.target.dataset.id;

        location.href = `animalDetalle.html?animal=${animalesJSONData[btnTarget - 1].nombre}`;
    }
});


/*Función Filter*/
const filtrarAnimales = (especie, edad, sexo, color, tamano) => {
    let animalesArray = [...animalesJSONData];

    let animalesFiltrados = animalesArray.filter((animal) => {
        if ((animal.especie == especie || especie == "todos") &&
            (sexo == null || animal.sexo.toLowerCase() == sexo) &&
            (color == null || animal.color.toLowerCase() == color) &&
            (tamano == null || animal.tamano.toLowerCase() == tamano)) {

            if ((edad == null) || (edad == "cachorro" && animal.edad < 2) ||
                (edad == "joven" && animal.edad > 2 && animal.edad <= 4) ||
                (edad == "adulto" && animal.edad > 4 && animal.edad < 7) ||
                (edad == "senior" && animal.edad >= 7)
            ) {
                return animal;
            }
        }
    });

    cardAnimal(animalesFiltrados);
};


//Evento del filtrado
document.querySelector(".dropdowns").addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(event.target); //La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que 
    //representan los campos de un formulario y sus valores. The target property of the Event interface is a reference to the object onto which the event was dispatched

    let data = Object.fromEntries(formData); //El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
    console.log(data)

    animalesArray = [...animalesJSONData]; //Acá le asigno de nuevo como valor a la variable el response del get, ya que si realizo un filtro y luego quiero volver
    //a filtrar, lo hace sobre el array filtrado y por ende, hay cosas que no están. 
    filtrarAnimales(data.especie, data.edad, data.sexo, data.color, data.tamano);

    if (window.innerHeight < 824) {
        document.querySelector(".filtros").classList.toggle("active-drop");
    }
});


//Reset del form
document.querySelector(".delete-filter-btn").addEventListener("click", () => {
    document.querySelector(".dropdowns").reset();
});



/*Filter Collapse Mobile*/
document.querySelector(".filter-btn").addEventListener("click", () => {
    document.querySelector(".filtros").classList.toggle("active-drop");
});


document.addEventListener("DOMContentLoaded", () => {
    const getAnimalData = () => {
        $.get("js/animales.json", (response) => {
            animalesJSONData = response;
            cardAnimal(animalesJSONData);
        });
    };

    getAnimalData();
});