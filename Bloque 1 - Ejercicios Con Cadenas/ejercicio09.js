/*
    9. Contar apariciones de un carácter elegido 
        -Entrada: Texto: "Examen de programación", Carácter: "m" 
        -Salida: "La letra 'm' aparece 3 veces."
*/

/*
    ENTRADA:
        texto (leer) = ""
        caracter (leer) = ""
        aparicionCaracter (asignar) = 0

    PROCESO:
        leer texto, caracter
        texto = minuscula(trim(texto))
        caracter = minuscula(trim(caracter))
        aparicionCaracter = 0

        para i = 0 hasta longitud(texto) - 1 hacer
            si texto[i] = caracter entonces
                aparicionCaracter = aparicionCaracter + 1
            fin si
        fin para

    SALIDA:
        si aparicionCaracter = 1 entonces
            escribir "La letra '" + caracter + "' aparece 1 vez."
        sino
            escribir "La letra '" + caracter + "' aparece " + aparicionCaracter + " veces."
*/

function aparicionCaracterElegido() {
    let texto = prompt('Ingrese su texto: ').toLowerCase().trim();
    let caracter = prompt('Elija el caracter: ').toLowerCase().trim();
    let aparicionCaracter = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            aparicionCaracter++
        }
    }

    alert(`La letra '${caracter}' aparece ${contador} ${contador === 1 ? 'vez' : 'veces'}.`);
}

aparicionCaracterElegido();