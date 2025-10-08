/*
    4. Comparar longitudes de cadenas
        -Entrada: "García" y "Pérez"
        -Salida: "El apellido 'García' tiene más letras."
*/

/*
    ENTRADA:
        cadena1 (leer) = ""
        cadena2 (leer) = ""
        cadenaMayor (asignar) = ""

    PROCESO:
        leer cadena1, cadena2
        si longitud(cadena1) > longitud(cadena2) entonces
            cadenaMayor = cadena1
        sino
            cadenaMayor = cadena2
        fin si

    SALIDA:
        Escribir "El apellido '" + cadenaMayor + "' tiene más letras."
*/

function compararLongitudesCadena() {
    const cadena1 = prompt('ingrese el apellido 1: ')
    const cadena2 = prompt('ingrese el apellido 2: ')
    let cadenaMayor = '';

    if (cadena1.length > cadena2.length) {
        cadenaMayor = cadena1;
    } else {
        cadenaMayor = cadena2;
    }

    alert(`El apellido '${cadenaMayor}' tiene más letras.`)

}

compararLongitudesCadena();