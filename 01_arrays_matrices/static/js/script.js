console.log("Conectando a js...")

/* Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios. */

function construirFrases() {
    let palabras = ["programar", "es"];
    palabras.push("increible");
    palabras.push("borrar");
    let eliminada = palabras.pop();
    alert(`El ${palabras.join(" ")}`);
    alert(`La palabra eliminada fue "${eliminada}"`)
}

/*Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];.
Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]".*/


function gestionFila() {

    let alumnos = ["juan", "maria", "Pedro"];

    alumnos.unshift("luis");
    let ingreso = alumnos.shift();

    alert(`Entró ${ingreso} y la fila ahora es ${alumnos}`)
}

/*  Ejercicio 3: Reordenando Números (Lógica de Índices)
Instrucciones: Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
Accede al número 3 y súmale 2 directamente en la operación de concatenación.
Construye la frase: "5 gatos negros duermen plácidamente".
Muestra el resultado con alert().*/

function redondear() {
    let datos = [3, "gatos", "negros", "duermen"]
    datos[0] += 2
    datos.push("Plácidamente.")
    alert(datos.join(" "))
}

/*Ejercicio 4: Coordenadas en la Matriz (Suma Simple)
Instrucciones: En una función, define:
JavaScript
let matriz = [
  [10, 20],
  [30, 40]
];
Accede al número 10 y al 40.
Suma ambos valores y muestra el resultado con un alert() que explique qué posiciones sumaste (ej: "Suma de [0][0] y [1][1]").
*/

function javaScript() {
    let matriz = [
        [10, 20],
        [30, 40]
    ]
    let suma = matriz[0][0] + matriz[1][1]
    alert(`suma de ${matriz[0][0]} y ${matriz[1][1]} da un total de ${suma}`);
}

/* Ejercicio 5: El Intruso en la Tercera Dimensión
Instrucciones: Crea una función con la matriz: let datos = [1, [2, [3, 4]]];.
Accede al número 4.
Usa .push() para agregar el número 5 al mismo sub-arreglo donde está el 4.
Muestra la matriz completa en un alert().*/

function operarIntruso() {
    let datos = [1, [2, [3, 4]]]
    datos[1][1].push(5)
    alert(datos);
}

/*Ejercicio 6: Traductor de Acciones (Matriz + Arreglo)
Instrucciones: Define let sujetos = ["El programador", "La computadora"]; y una matriz let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];.
Crea una función que tome a "El programador" y la acción "analiza".
Concatena la frase y lánzala por alert().*/

function traductorAcciones() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    let frase = `${sujetos[0]} ${verbos[0][1]}`;
    alert(frase);
}

// Ejercicio 7: Limpieza de Datos (Pop y Unshift)
function limpiezaDatos() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("Monitor");
    alert(`Inventario final: ${inventario.join(", ")}`);
}

// Ejercicio 8: La Matriz de Identidad Modificada
function matrizIdModificada() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1;
    alert(tablero);
}

// Ejercicio 9: El Consultorio Médico (Complejo)
function consultorioMedico() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos", "Diana");
    pacientes.shift();
    pacientes.unshift("Sonia");
    alert(`Pacientes restantes: ${pacientes.length} \nSiguiente en la lista: ${pacientes[0]}`);
}

// Ejercicio 10: Extracción de Profundidad (Matriz 3x3x3)
function extraccionProfundidad() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    let canasta = [caja[1][0][1], caja[1][1][1]];
    alert(`En la canasta hay ${canasta[0]} y ${canasta[1]}`);
}