const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e) => {
  e.preventDefault(); // evita que se envíe el formulario automáticamente
  let error = validarCampos();
  
  if (error[0]) {
    resultado.innerHTML = error[1];
    resultado.classList.add("red");
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente";
    resultado.classList.add("green");
  }
});

const validarCampos = () => {
  let error = [];
  
  if (nombre.value.length < 5) {
    error[0] = true;
    error[1] = "El nombre no puede contener menos de 5 caracteres.";
    return error;
  } else if (nombre.value.length > 40) {
    error[0] = true;
    error[1] = "El nombre no puede contener más de 40 caracteres.";
    return error;
  } else if (email.value.length < 5 || email.value.length > 40 || !email.value.includes("@") || !email.value.includes(".")) {
    error[0] = true;
    error[1] = "El email no es válido.";
    return error;
  }

  error[0] = false;
  return error;
};
