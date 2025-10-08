/*
    26. Suma de dos arreglos en un tercero 
        -Entrada: A = [2, 4, 6], B = [1, 3, 5] 
        -Salida: C = [3, 7, 11]
*/

/*
    ENTRADA:
        A (leer) = []
        B (leer) = []
        cantidadElementos (leer) = 0
        C (asignar) = []

    PROCESO:
        leer cantidadElementos
        para i = 0 hasta cantidadElementos - 1 hacer
            leer A[i]
        fin para

        para i = 0 hasta cantidadElementos - 1 hacer
            leer B[i]
        fin para

        C = []
        para i = 0 hasta cantidadElementos - 1 hacer
            agregar (A[i] + B[i]) a C
        fin para

    SALIDA:
        escribir "Resultado de la suma: [" + unir(C, ", ") + "]"
*/

function sumaDosArreglos() {
    let A = [];
    let B = [];
    const cantidadElementos = parseInt(prompt('¿Cuántos elementos tendrá cada arreglo?: '));

    for (let i = 0; i < cantidadElementos; i++) {
        A[i] = parseInt(prompt(`Arreglo A - elemento ${i + 1}: `));
    }

    for (let i = 0; i < cantidadElementos; i++) {
        B[i] = parseInt(prompt(`Arreglo B - elemento ${i + 1}: `));
    }

    let C = [];

    for (let i = 0; i < cantidadElementos; i++) {
        C.push(A[i] + B[i]);
    }

    alert(`Resultado de la suma: [${C.join(', ')}]`);
}

sumaDosArreglos();
