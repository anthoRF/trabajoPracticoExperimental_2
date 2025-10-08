/*
    5. Iniciales de un nombre completo 
        -Entrada: "Ana María Torres" 
        -Salida: "A.M.T."
*/

/*
    ENTRADA:
        nombreCompleto (leer) = ""
        iniciales (asignar) = ""

    PROCESO:
        leer nombreCompleto
        nombreCompleto = trim(nombreCompleto)
        iniciales = mayuscula(nombreCompleto[0]) + "."
        
        para i = 0 hasta longitud(nombreCompleto) - 1 hacer
            si nombreCompleto[i] = " " entonces
                iniciales = iniciales + mayuscula(nombreCompleto[i + 1]) + "."
            fin si
        fin para

    SALIDA:
        escribir iniciales
*/

function inicialesNombreCompleto() {
    let nombreCompleto = prompt('Ingrese su nombre completo: ').trim();
    let iniciales = nombreCompleto[0].toUpperCase() + '.';

    for(let i = 0; i < nombreCompleto.length; i++) {
        if(nombreCompleto[i] === ' ') {
            iniciales += nombreCompleto[i+1].toUpperCase() + '.';
        }
    }
    
    alert(iniciales);
}

inicialesNombreCompleto();