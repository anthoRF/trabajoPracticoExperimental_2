/*
    11. Divisores de números en un arreglo 
        -Entrada: [6, 10] 
        -Salida: 
            • Divisores de 6: 1, 2, 3, 6 
            • Divisores de 10: 1, 2, 5, 10
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        divisores (asignar) = []

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        para i = 0 hasta longitud(numeros) - 1 hacer
            divisores = []
            para j = 1 hasta numeros[i] hacer
                si numeros[i] % j = 0 entonces
                    agregar j a divisores
                fin si
            fin para
            escribir "Divisores de " + numeros[i] + ": " + unir(divisores, ", ")
        fin para

    SALIDA:
        mostrar en pantalla los divisores de cada número
*/

function divisoresDeNumerosEnArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    for (let i = 0; i < numeros.length; i++) {
        let divisores = [];

        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                divisores.push(j);
            }
        }

        alert(`Divisores de ${numeros[i]}: ${divisores.join(', ')}`);
    }
}

divisoresDeNumerosEnArreglo();

