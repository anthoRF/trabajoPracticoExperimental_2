/*
    10. Dividir oración en palabras 
    -Entrada: "Me gusta aprender programación" 
    -Salida: 
        • Me   
        • gusta   
        • aprender   
        • programación  
*/

/*
    ENTRADA:
        oracion (leer) = ""
        palabra (asignar) = ""
        resultado (asignar) = ""

    PROCESO:
        leer oracion
        oracion = trim(oracion)
        palabra = ""
        resultado = ""

        para i = 0 hasta longitud(oracion) hacer
            si oracion[i] != " " y oracion[i] != indefinido entonces
                palabra = palabra + oracion[i]
            sino si palabra != "" entonces
                resultado = resultado + palabra + "\n"
                palabra = ""
            fin si
        fin para

    SALIDA:
        escribir resultado
*/

function dividirOracion() {
    let oracion = prompt('Ingrese su oración: ').trim();
    let palabra = '';
    let resultado = '';

    for (let i = 0; i <= oracion.length; i++) {
        if (oracion[i] !== ' ' && oracion[i] !== undefined) {
            palabra += oracion[i];
        } else if (palabra) {
            resultado += `${palabra}\n`;
            palabra = '';
        }
    }

    alert(resultado);
}

dividirOracion();