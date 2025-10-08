/*
    25. Copiar pares a otro arreglo 
        -Entrada: [3, 8, 11, 14, 25] 
        -Salida: [8, 14] 
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        pares (asignar) = []

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        pares = []
        para i = 0 hasta longitud(numeros) - 1 hacer
            si numeros[i] % 2 = 0 entonces
                agregar numeros[i] a pares
            fin si
        fin para

    SALIDA:
        escribir "Números pares: [" + unir(pares, ", ") + "]"
*/

function copiarParesArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    alert(`Números pares: [${pares.join(', ')}]`);
}

copiarParesArreglo();