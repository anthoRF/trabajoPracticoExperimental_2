/* 
    8. Frase con mayor cantidad de caracteres 
        -Entrada: "Me gusta el fútbol" y "Prefiero el baloncesto" 
        -Salida: "La frase 'Prefiero el baloncesto' tiene más caracteres."
*/

/*
    ENTRADA:
        frase1 (leer) = ""
        frase2 (leer) = ""
        mayor (asignar) = ""

    PROCESO:
        leer frase1, frase2
        frase1 = trim(frase1)
        frase2 = trim(frase2)
        mayor = ""

        si longitud(frase1) > longitud(frase2) entonces
            mayor = frase1
        sino si longitud(frase2) > longitud(frase1) entonces
            mayor = frase2
        fin si

    SALIDA:
        si mayor != "" entonces
            escribir "La frase '" + mayor + "' tiene más caracteres."
        sino
            escribir "Ambas frases tienen la misma cantidad de caracteres."
*/

function fraseMayorCantidadCaracteres() {
    let frase1 = prompt('Ingrese su frase 1: ').trim();
    let frase2 = prompt('Ingrese su frase 2: ').trim();
    let mayor = '';

    if (frase1.length > frase2.length) {
        mayor = frase1;
    } else if (frase2.length > frase1.length) {
        mayor = frase2;
    }
    
    if (mayor) {
        alert(`La frase '${mayor}' tiene más caracteres.`);
    } else {
        alert('Ambas frases tienen la misma cantidad de caracteres.');
    }
}

fraseMayorCantidadCaracteres();