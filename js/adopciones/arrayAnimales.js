class Animal{
    constructor(nombre, especie, edad, sexo, tamanio, img, id){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.sexo = sexo;
        this.tamanio = tamanio;
        this.img = img;
        // this.historia = historia;
        this.id = id;

    }
};

const arrayAnimales = [
    new Animal("Bandido", "Perro", 5, "Macho", "Mediano", "animal-1", 1),
    new Animal("Margarita", "Gato", 2, "Hembra", "Mediano", "animal-2", 2),
    new Animal("Pelusa", "Perro", 1, "Hembra", "Grande", "animal-3", 3),
    new Animal("Aurora", "Gato", 8, "Hembra", "Grande", "animal-4", 4),
    new Animal("Raulito", "Gato", 2, "Macho", "Pequeño", "animal-5", 5),
    new Animal("Luna", "Gato", 12, "Hembra", "Grande", "animal-6", 6),
    new Animal("Felipe", "Perro", 4, "Macho", "Mediano", "animal-7", 7),
    new Animal("Barbas", "Perro", 9, "Macho", "Pequeño", "animal-8", 8),
    new Animal("Bombón", "Gato", 4, "Hembra", "Grande", "animal-9", 9),
];