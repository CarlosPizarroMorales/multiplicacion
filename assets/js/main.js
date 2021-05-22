//logica basica
let userNumber = null;
window.onload = () => {
    console.log(multiplicar(16));
    console.log(factorial(16));
}
const multiplicar = (x) => {
    let tabla = [];
    for (let i = 1; i <= x; i++) {
        tabla.push(x * i);
    }
    return tabla;
}

const factorial = (x) => {
    let tablaFactorial = [];
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