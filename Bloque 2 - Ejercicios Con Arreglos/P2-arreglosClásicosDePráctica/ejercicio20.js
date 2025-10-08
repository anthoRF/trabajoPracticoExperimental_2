/*
    20. Buscar valor en un arreglo 
        -Entrada: [4, 8, 15, 23], valor = 15 
        -Salida: "El valor 15 sí existe en el arreglo."
*/

/*
    ENTRADA:
        arreglo (leer) = []
        cantidad (leer) = 0
        valorBuscado (leer) = 0
        encontrado (asignar) = falso

    PROCESO:
        leer cantidad
        para i = 0 hasta cantidad - 1 hacer
            leer arreglo[i]
        fin para

        leer valorBuscado
        encontrado = falso

        para i = 0 hasta longitud(arreglo) - 1 hacer
            si arreglo[i] = valorBuscado entonces
                encontrado = verdadero
                salir del ciclo
            fin si
        fin para

    SALIDA:
        si encontrado = verdadero entonces
            escribir "El valor " + valorBuscado + " sí existe en el arreglo."
        sino
            escribir "El valor " + valorBuscado + " no existe en el arreglo."
*/

function buscarValorEnArreglo() {
    let arreglo = [];
    const cantidad = parseInt(prompt('¿Cuántos números tendrá el arreglo?: '));

    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    const valorBuscado = parseInt(prompt('Ingrese el valor a buscar: '));

    let encontrado = false;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorBuscado) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert(`El valor ${valorBuscado} sí existe en el arreglo.`);
    } else {
        alert(`El valor ${valorBuscado} no existe en el arreglo.`);
    }
}

buscarValorEnArreglo();
