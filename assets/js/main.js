//logica basica
let formulario = document.getElementById('formulario');
let tablaFactorial = [];
let tabla = [];

formulario.addEventListener("submit", event => {
    event.preventDefault();
    const valor = document.getElementById('input').value;
    multiplicar(valor);
    factorial(valor);
    dibuja();
});

//funciones
const multiplicar = (x) => {

    for (let i = 1; i <= x; i++) {
        tabla.push(x * i);
    }
    return tabla;
}

const factorial = (x) => {

    let acum = null;
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= i; j++) {
            acum *= j
        }
        tablaFactorial.push(acum);
        acum = 1;
    }
    return tablaFactorial;
}

function dibuja() {
    let cajon1 = document.getElementById('resultadoUno');
    let cajon2 = document.getElementById('resultadoDos');
    cajon1.innerHTML = "";
    cajon2.innerHTML = "";
    console.log('todo ok por aca...');
    cajon1.innerHTML += '<p class="mensaje">......processing</p>';
    cajon2.innerHTML += '<p class="mensaje">......processing</p>';
    for (let i = 0; i < tabla.length; i++) {
        cajon1.innerHTML += `${tabla[0]} x ${i+1} = ${tabla[i]} <br>`;
    }
    for (let i = 0; i < tablaFactorial.length; i++) {
        cajon2.innerHTML += `Factorial de ${i+1} = ${tablaFactorial[i]} <br>`;
    }
    tablaFactorial = [];
    tabla = [];
}