let alumnos = [
    {
        nombre: "Lucas Dalto",
        email: "soydalto@gmail.com",
        materia: "Física 3"
    },
    {
        nombre: "Karin Guerra",
        email: "karin@gmail.com",
        materia: "Física 1"
    },
    {
        nombre: "Jorge Ramírez",
        email: "ramirez@gmail.com",
        materia: "Cálculo 2"
    },
    {
        nombre: "Facundo Roberto",
        email: "robert@gmail.com",
        materia: "Literatura"
    },
    {
        nombre: "Coffla XD",
        email: "cofla@gmail.com",
        materia: "Recreo"
    }
];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="1">Semana 1</option>
                <option value="2">Semana 2</option>
            </select>
        </div>
    </div>`;
}
contenedor.innerHTML = htmlCode;

boton.addEventListener("click", () => {
    let confirmar = confirm("¿Desea confirmar las semanas elegidas?");
    if (confirmar) {
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for ( elemento in elementos) {
        semana  = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }}});