/* 
    14. Números primos en un arreglo 
        -Entrada: [7, 8, 13] 
        -Salida: "Números primos: 7, 13"
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        primos (asignar) = []
        divisores (asignar) = 0

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        primos = []

        para i = 0 hasta longitud(numeros) - 1 hacer
            divisores = 0
            para j = 1 hasta numeros[i] hacer
                si numeros[i] % j = 0 entonces
                    divisores = divisores + 1
                fin si
            fin para

            si divisores = 2 entonces
                agregar numeros[i] a primos
            fin si
        fin para

    SALIDA:
        si longitud(primos) > 0 entonces
            escribir "Números primos: " + unir(primos, ", ")
        sino
            escribir "No hay números primos en el arreglo."
*/

function numerosPrimosEnArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));


    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    let primos = [];

    for (let i = 0; i < numeros.length; i++) {
        let divisores = 0;

        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                divisores++;
            }
        }

        if (divisores === 2) {
            primos.push(numeros[i]);
        }
    }

    if (primos.length > 0) {
        alert(`Números primos: ${primos.join(', ')}`);
    } else {
        alert("No hay números primos en el arreglo.");
    }
}

numerosPrimosEnArreglo();