/*
    18. Contar impares en un arreglo 
        -Entrada: [2, 5, 7, 8, 10] 
        -Salida: "Cantidad de impares: 2"
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        contadorImpares (asignar) = 0

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        contadorImpares = 0
        para i = 0 hasta longitud(numeros) - 1 hacer
            si numeros[i] % 2 != 0 entonces
                contadorImpares = contadorImpares + 1
            fin si
        fin para

    SALIDA:
        escribir "Cantidad de impares: " + contadorImpares
*/

function contarImparesEnArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    let contadorImpares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contadorImpares++;
        }
    }

    alert(`Cantidad de impares: ${contadorImpares}`);
}

contarImparesEnArreglo();