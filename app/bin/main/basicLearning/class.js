class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInfo() {
        document.write(this.info + "<br>");
    }
}

let perro = new Animal("perro", 5, "marrón");
let gato = new Animal("gato", 2, "negro");
let pajaro = new Animal("pajaro", 1, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

class persona {
    constructor(nombre, edad, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.info = `Soy ${this.nombre}, tengo ${this.edad} años y mido ${this.altura} cm`;


    }

    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getAltura() {
        return this.altura;
    }


}

let numeros = ["uno", "dos", "tres", "cuatro", "cinco"];
resultado = numeros.filter(num => num.length > 3)
document.write(resultado); // Muestra ["cuatro", "cinco"]