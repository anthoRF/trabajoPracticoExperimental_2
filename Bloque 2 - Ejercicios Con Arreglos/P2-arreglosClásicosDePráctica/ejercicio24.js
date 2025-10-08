/* 
    24. Factorial de cada número en un arreglo 
    -Entrada: [4, 6] 
    -Salida: [24, 720]
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        factoriales (asignar) = []
        factorial (asignar) = 1

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        factoriales = []
        para i = 0 hasta longitud(numeros) - 1 hacer
            factorial = 1
            para j = 1 hasta numeros[i] hacer
                factorial = factorial * j
            fin para
            agregar factorial a factoriales
        fin para

    SALIDA:
        escribir "Factoriales: [" + unir(factoriales, ", ") + "]"
*/

function factorialArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    let factoriales = [];

    for (let i = 0; i < numeros.length; i++) {
        let factorial = 1;
        for (let j = 1; j <= numeros[i]; j++) {
            factorial *= j;
        }
        factoriales.push(factorial);
    }

    alert(`Factoriales: [${factoriales.join(', ')}]`);
}

factorialArreglo();