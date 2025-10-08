/*
    15. Factorial de números en un arreglo 
        -Entrada: [3, 5] 
        -Salida: 
            • 3! = 6 
            • 5! = 120
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        factorial (asignar) = 1

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        para i = 0 hasta longitud(numeros) - 1 hacer
            factorial = 1
            para j = 1 hasta numeros[i] hacer
                factorial = factorial * j
            fin para
            escribir numeros[i] + "! = " + factorial
        fin para

    SALIDA:
        mostrar en pantalla el factorial de cada número
*/

function factorialNumerosArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    for (let i = 0; i < numeros.length; i++) {
        let factorial = 1;

        for (let j = 1; j <= numeros[i]; j++) {
            factorial *= j;
        }

        alert(`${numeros[i]}! = ${factorial}`);
    }
}

factorialNumerosArreglo();