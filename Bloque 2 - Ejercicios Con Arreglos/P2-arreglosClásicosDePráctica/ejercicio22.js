/*
    22. Cubo de elementos de un arreglo 
        -Entrada: [2, 3, 4] 
        -Salida: [8, 27, 64]
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        cubos (asignar) = []

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        cubos = []
        para i = 0 hasta longitud(numeros) - 1 hacer
            agregar (numeros[i] ^ 3) a cubos
        fin para

    SALIDA:
        escribir "Cubo de los elementos: [" + unir(cubos, ", ") + "]"
*/

function cuboElementosArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseFloat(prompt(`Número ${i + 1}: `));
    }

    let cubos = [];

    for (let i = 0; i < numeros.length; i++) {
        cubos.push(Math.pow(numeros[i], 3));
    }

    alert(`Cubo de los elementos: [${cubos.join(', ')}]`);
}

cuboElementosArreglo();