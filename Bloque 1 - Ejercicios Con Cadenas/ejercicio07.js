/*
    7. Palabra palíndroma 
        -Entrada: "radar" 
        -Salida: "La palabra 'radar' es un palíndromo."
*/

/*
    ENTRADA:
        palabra (leer) = ""
        invertida (asignar) = ""

    PROCESO:
        leer palabra
        palabra = minuscula(trim(palabra))
        invertida = ""
        
        para i = longitud(palabra) - 1 hasta 0 hacer
            invertida = invertida + palabra[i]
        fin para

        si palabra = invertida entonces
            resultado = "La palabra '" + palabra + "' es un palíndromo."
        sino
            resultado = "La palabra '" + palabra + "' no es un palíndromo."
        fin si

    SALIDA:
        escribir resultado
*/

function palabraPalindroma() {
    let palabra = prompt('Ingrese su palabra: ').toLowerCase().trim();
    let invertida = '';

    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }

    if (palabra === invertida) {
        alert(`La palabra '${palabra}' es un palíndromo.`);
    } else {
        alert(`La palabra '${palabra}' no es un palíndromo.`);
    }
}

palabraPalindroma();