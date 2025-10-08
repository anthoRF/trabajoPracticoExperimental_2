/*
    6. Reemplazo de caracteres 
        -Entrada: "Programador" 
        -Salida: "Pr#gramad#r"
*/

/*
    ENTRADA:
        palabra (leer) = ""
        nuevaPalabra (asignar) = ""

    PROCESO:
        leer palabra
        nuevaPalabra = ""
        
        para i = 0 hasta longitud(palabra) - 1 hacer
            si palabra[i] = "o" o palabra[i] = "O" entonces
                nuevaPalabra = nuevaPalabra + "#"
            sino
                nuevaPalabra = nuevaPalabra + palabra[i]
            fin si
        fin para

    SALIDA:
        escribir nuevaPalabra
*/

function reemplazarCaracteres() {
    let nuevaPalabra = '';
    const palabra = prompt('Ingrese su palabra: ');
    
    for(let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'o' || palabra[i] === 'O') {
            nuevaPalabra += '#';
        } else {
            nuevaPalabra += palabra[i];
        }
    }
    alert(nuevaPalabra);
}

reemplazarCaracteres();