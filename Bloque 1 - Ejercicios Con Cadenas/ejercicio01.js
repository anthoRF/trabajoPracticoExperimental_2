/*
    1. Contar caracteres de una palabra
       -Entrada: "Manzana"
       -Salida: "La palabra tiene 7 letras."
*/

/*
    ENTRADA:
        palabra (leer) = ""
        contador (asignar) = 0
        i (asignar) = 0

    PROCESO:
        leer palabra
        para i desde 0 hasta longitud(palabra)-1 hacer
            si palabra[i] ≠ ' ' entonces
                contador = contador + 1
            fin si
        fin para

    SALIDA:
        Escribir "La palabra tiene " + contador + " letras."
*/


function contarCaracteresPalabra() {
    let palabra = prompt("Ingrese una palabra: ");
    let contador = 0;
    for (let i = 0; palabra[i] !== undefined; i++) {
        if (palabra[i] !== ' ') {
            contador++;
        }
    }
    alert(`La palabra tiene ${contador} letras.`);
}

contarCaracteresPalabra();