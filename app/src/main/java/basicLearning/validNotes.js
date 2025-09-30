let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[i][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales) {
        tomarAsistencia(alumnosTo1ales[alumno][0], alumno);
    }
}
1

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _____Presentes: ${alumnosTotales[alumno][1]} <br>
    _____Ausencias: ${30 - alumnosTotales[alumno][1]}
    `;

    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    } else {
        resultado += "<br><br>";
    }

    document.write(resultado);
}
