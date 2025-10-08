/*
    13. Números perfectos en un arreglo 
        -Entrada: [6, 10, 28] 
        -Salida: "Números perfectos: 6, 28"
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        numerosPerfectos (asignar) = []
        sumaDivisores (asignar) = 0

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        numerosPerfectos = []

        para i = 0 hasta longitud(numeros) - 1 hacer
            sumaDivisores = 0
            para j = 1 hasta numeros[i] - 1 hacer
                si numeros[i] % j = 0 entonces
                    sumaDivisores = sumaDivisores + j
                fin si
            fin para

            si sumaDivisores = numeros[i] entonces
                agregar numeros[i] a numerosPerfectos
            fin si
        fin para

    SALIDA:
        si longitud(numerosPerfectos) > 0 entonces
            escribir "Números perfectos: " + unir(numerosPerfectos, ", ")
        sino
            escribir "No hay números perfectos en el arreglo."
*/

function numerosPerfectosEnArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    let numerosPerfectos = [];

    for (let i = 0; i < numeros.length; i++) {
        let sumaDivisores = 0;

        for (let j = 1; j < numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                sumaDivisores += j;
            }
        }

        if (sumaDivisores === numeros[i]) {
            numerosPerfectos.push(numeros[i]);
        }
    }

    if (numerosPerfectos.length > 0) {
        alert(`Números perfectos: ${numerosPerfectos.join(', ')}`);
    } else {
        alert("No hay números perfectos en el arreglo.");
    }
}

numerosPerfectosEnArreglo();
