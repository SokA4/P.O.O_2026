console.log("js Conectando....")

function validarEdad() {
    let edad = parseInt(prompt("Ingrese edad: "));

    if (edad >= 18) {
        alert("Acceso permitido a la App.")
    } else if (edad < 18) {
        alert("Acceso denegado: Necesitas ser mayor de edad.")
    } else if (edad > 120) {
        alert("Use una edad Válida.")
    }
}