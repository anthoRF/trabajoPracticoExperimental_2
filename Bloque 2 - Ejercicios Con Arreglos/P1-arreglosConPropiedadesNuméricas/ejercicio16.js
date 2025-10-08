/*
    16. Invertir números en un arreglo 
        -Entrada: [123, 450] 
        -Salida: [321, 54]
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        invertidos (asignar) = []
        num, invertido, digito (asignar) = 0

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        invertidos = []

        para i = 0 hasta longitud(numeros) - 1 hacer
            num = numeros[i]
            invertido = 0

            mientras num > 0 hacer
                digito = num % 10
                invertido = invertido * 10 + digito
                num = entero(num / 10)
            fin mientras

            agregar invertido a invertidos
        fin para

    SALIDA:
        escribir "Números invertidos: [" + unir(invertidos, ", ") + "]"
*/

function invertirNumerosEnArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    let invertidos = [];

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        let invertido = 0;

        while (num > 0) {
            let digito = num % 10;
            invertido = invertido * 10 + digito;
            num = Math.floor(num / 10);
        }

        invertidos.push(invertido);
    }

    alert(`Números invertidos: [${invertidos.join(', ')}]`);
}

invertirNumerosEnArreglo();
