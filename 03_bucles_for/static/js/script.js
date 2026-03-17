console.log("Conectado con JS...")

function contadorPantalla() {
    let numeros = [];
    const container = document.getElementById('resultadoContador');
    const resultado = document.getElementById('result1');
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contado: ${numeros.join(" , ")}`;
    container.classList.remove(`d-none`);
};

function filaEspera() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    let espacio = [];
    const arreglo = document.getElementById('resultadoArreglo')
    const resultado = document.getElementById('result2')
    for (let i = 0; i <= curso.length; i++) {
        espacio.push(i);
    }
    resultado.textContent = `arreglo: ${curso.join(" , ")}`;
    arreglo.classList.remove(`d-none`);
};

/*3. Buscador de Aprobados (Escala 1 a 7)notas = 
Tienes una lista con las notas finales de un curso: let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
Crea una variable contadorAprobados que inicie en 0.
Recorre el arreglo con un for. Si la nota es 4.0 o superior, suma 1 al contador.
Al terminar el ciclo, muestra en el párrafo pantalla: "Total de alumnos aprobados: [número]".*/

function reordenarDatos() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;
    const apro = document.getElementById('contenedor3')
    const resultado = document.getElementById('result3')

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4.0) {
            contadorAprobados++
        }
    }
    resultado.textContent = `Total de almunos aprobados: ${contadorAprobados}`;
    apro.classList.remove(`d-none`);
}

/*4. El Filtro de Inventario
Una tienda quiere mostrar solo los productos que están disponibles.
let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
Recorre la lista con un ciclo for.
Si el producto es diferente de "Agotado" (!==), agrégalo al texto del párrafo pantalla. Si dice "Agotado", sáltalo. */

function controlStock() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    let disponible = [];
    const pro = document.getElementById('contenedor4')
    const resultado = document.getElementById('result4')

    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            disponible.push(productos[i]);
        }

    }
    resultado.textContent = `Productos disponibles: ${disponible.join(" , ")}`;
    pro.classList.remove(`d-none`);
};


function operarIntruso() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const container = document.getElementById('contenedor5');
    const resultado = document.getElementById('result5');
    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i];
    }
    resultado.textContent = `La colecta reunio un total de ${[totalRecaudado]}`;
    container.classList.remove(`d-none`);
};

function traducirAcciones() {
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    let resultados = [];
    const container6 = document.getElementById('contenedor6');
    const resultado6 = document.getElementById('result6');
    for (let i = 0; i < asistentes.length; i++) {
        if (i % 2 === 0) {
            resultados.push(`${asistentes[i]} [VIP]`)
        } else {
            resultados.push(`${asistentes[i]}`);
        }
    }
    resultado6.textContent = resultados.join(" - ");
    container6.classList.remove(`d-none`);
}

function buscadorStock() {
    let bodega = ["Lapiz", "Cuaderno", "Regla", "Cuderno"];
    let articulosBuscados = prompt("Ingrese el articulo que busca");
    let vecesEncontrados = 0;
    const container7 = document.getElementById('contenedor6');
    const resultado7 = document.getElementById('result6');
    for (let i = 0; i < bodega.length; i++) {
        if (articulosBuscados == bodega [i]) {
            vecesEncontrados ++
        } 
    }
    resultado7.textContent = `El articulo ${articulosBuscados} se encuentra ${vecesEncontrados} veces en la bodega`
    container7.classList.remove(`d-none`);
}