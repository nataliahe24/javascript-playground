 class Calculadora {

    constructor() {
        this.resultado = 0;
    }
    suma(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    resta(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    division(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
}

let calculadora = new Calculadora();


let operacion = prompt("¿Qué operación deseas realizar?\n1: suma, 2: resta, 3: división, 4: multiplicación");

let numero1, numero2, resultado;

if (operacion == 1) {
    numero1 = prompt("Primer número para sumar");
    numero2 = prompt("Segundo número para sumar");
    resultado = calculadora.suma(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 2) {
    numero1 = prompt("Primer número para restar");
    numero2 = prompt("Segundo número para restar");
    resultado = calculadora.resta(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 3) {
    numero1 = prompt("Primer número para dividir");
    numero2 = prompt("Segundo número para dividir");
    resultado = calculadora.division(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 4) {
    numero1 = prompt("Primer número para multiplicar");
    numero2 = prompt("Segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else {
    alert("No se ha encontrado la operación");
}
 console.log("%cHola", "color: blue ; background-color: yellow; font-size: 20px");