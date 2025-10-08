/*
    21. Concatenar palabras de un arreglo 
        -Entrada: ["Me", "gusta", "programar"] 
        -Salida: "Me gusta programar"
*/

/*
    ENTRADA:
        palabras (leer) = []
        cantidadPalabras (leer) = 0
        resultado (asignar) = ""

    PROCESO:
        leer cantidadPalabras
        para i = 0 hasta cantidadPalabras - 1 hacer
            leer palabras[i]
        fin para

        resultado = ""
        para i = 0 hasta longitud(palabras) - 1 hacer
            resultado = resultado + palabras[i]
            si i < longitud(palabras) - 1 entonces
                resultado = resultado + " "
            fin si
        fin para

    SALIDA:
        escribir resultado
*/

function concatenarPalabrasArreglo() {
    let palabras = [];
    const cantidadPalabras = parseInt(prompt('¿Cuántas palabras desea ingresar?: '));

    for (let i = 0; i < cantidadPalabras; i++) {
        palabras[i] = prompt(`Palabra ${i + 1}: `);
    }

    let resultado = '';
    for (let i = 0; i < palabras.length; i++) {
        resultado += palabras[i];
        if (i < palabras.length - 1) {
            resultado += ' ';
        }
    }

    alert(resultado);
}

concatenarPalabrasArreglo();
