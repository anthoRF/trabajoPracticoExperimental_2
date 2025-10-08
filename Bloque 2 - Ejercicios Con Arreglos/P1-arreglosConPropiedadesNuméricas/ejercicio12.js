/*
    12. Suma de divisores en un arreglo 
        -Entrada: [6, 12] 
        -Salida: 
            • Suma divisores de 6 = 12 
            • Suma divisores de 12 = 28
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        sumaDivisores (asignar) = 0

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        para i = 0 hasta longitud(numeros) - 1 hacer
            sumaDivisores = 0
            para j = 1 hasta numeros[i] hacer
                si numeros[i] % j = 0 entonces
                    sumaDivisores = sumaDivisores + j
                fin si
            fin para
            escribir "Suma divisores de " + numeros[i] + " = " + sumaDivisores
        fin para

    SALIDA:
        mostrar en pantalla la suma de divisores de cada número
*/

function sumaDivisoresArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    for (let i = 0; i < numeros.length; i++) {
        let sumaDivisores = 0;

        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                sumaDivisores += j;
            }
        }

        alert(` Suma Divisores de ${numeros[i]}: ${sumaDivisores}`);
    }
}

sumaDivisoresArreglo();