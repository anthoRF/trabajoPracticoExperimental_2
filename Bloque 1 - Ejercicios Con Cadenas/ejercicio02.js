/* 
    2. Contar apariciones de una letra específica
        -Entrada: "Me encanta el café"
        -Salida: "La letra 'e' aparece 4 veces." 
*/

/*
    ENTRADA:
        frase (leer) = ""
        contador (asignar) = 0
        i (asignar) = 0

    PROCESO:
        leer frase
        para i desde 0 hasta longitud(frase)-1 hacer
            si frase[i] = 'e' o frase[i] = 'E' o frase[i] = 'é' o frase[i] = 'É' entonces
                contador = contador + 1
            fin si
        fin para

    SALIDA:
        Escribir "La letra 'e' aparece " + contador + " veces."
*/

function contarAparicionLetra() {
    let contador = 0;
    let frase = prompt('Ingrese la frase:');

    for(let i = 0; i < frase.length; i++) {
        if (frase[i] === 'e' || frase[i] === 'E' || frase[i] === 'é' || frase[i] === 'É') {
            contador++;
        }
    }
    alert(`La letra 'e' aparece ${contador} veces.`);

}

contarAparicionLetra();