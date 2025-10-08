/*
    17. Promedio de un arreglo 
        -Entrada: [5, 7, 9, 3, 6] 
        -Salida: "El promedio es 6."
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        suma, promedio (asignar) = 0

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        suma = 0
        para i = 0 hasta longitud(numeros) - 1 hacer
            suma = suma + numeros[i]
        fin para

        promedio = suma / longitud(numeros)

    SALIDA:
        escribir "El promedio es " + promedio
*/

function promedioArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseFloat(prompt(`Número ${i + 1}: `));
    }

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;

    alert(`El promedio es ${promedio}.`);
}

promedioArreglo();
