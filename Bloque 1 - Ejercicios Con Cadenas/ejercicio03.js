/*
    3. Invertir un texto
        -Entrada: "Quito"
        -Salida: "otiuq"
*/

/*
    ENTRADA:
        texto (leer) = ""
        textoInvertido (asignar) = ""
        i (asignar) = 0

    PROCESO:
        leer texto
        para i desde longitud(texto)-1 hasta 0 con paso -1 hacer
            textoInvertido = textoInvertido + texto[i]
        fin para

    SALIDA:
        Escribir "El texto invertido es: " + textoInvertido
*/

function invertirTexto() {
    let texto = prompt('Ingrese su texto a invertir: ');
    let textoInvertido = '';

    for(let i = texto.length-1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    alert(`El texto invertido es: ${textoInvertido}`);
}

invertirTexto();