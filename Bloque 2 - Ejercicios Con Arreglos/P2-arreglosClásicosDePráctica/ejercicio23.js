/* 
    23. Tabla de multiplicar de elementos 
    -Entrada: [3, 5] 
    -Salida: 
        • Tabla de 3: 3, 6, 9, …, 30 
        • Tabla de 5: 5, 10, 15, …, 50 
*/

/*
    ENTRADA:
        numeros (leer) = []
        cantidadNumeros (leer) = 0
        tabla (asignar) = []

    PROCESO:
        leer cantidadNumeros
        para i = 0 hasta cantidadNumeros - 1 hacer
            leer numeros[i]
        fin para

        para i = 0 hasta longitud(numeros) - 1 hacer
            tabla = []
            para j = 1 hasta 10 hacer
                agregar numeros[i] * j a tabla
            fin para
            escribir "• Tabla de " + numeros[i] + ": " + unir(tabla, ", ")
        fin para

    SALIDA:
        mostrar en pantalla la tabla de multiplicar de cada número
*/

function tablaMultiplicarArreglo() {
    let numeros = [];
    const cantidadNumeros = parseInt(prompt('¿Cuántos números desea ingresar?: '));

    for (let i = 0; i < cantidadNumeros; i++) {
        numeros[i] = parseInt(prompt(`Número ${i + 1}: `));
    }

    for (let i = 0; i < numeros.length; i++) {
        let tabla = [];
        for (let j = 1; j <= 10; j++) {
            tabla.push(numeros[i] * j);
        }

        alert(`Tabla de ${numeros[i]}: ${tabla.join(', ')}`);
    }
}

tablaMultiplicarArreglo();