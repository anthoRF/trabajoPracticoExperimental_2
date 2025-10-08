/*
    19. Mayores de edad en un arreglo 
        -Entrada: [15, 22, 18, 30, 12] 
        -Salida: "Mayores de edad: 3"
*/

/*
    ENTRADA:
        edades (leer) = []
        cantidadPersonas (leer) = 0
        mayoresEdad (asignar) = 0

    PROCESO:
        leer cantidadPersonas
        para i = 0 hasta cantidadPersonas - 1 hacer
            leer edades[i]
        fin para

        mayoresEdad = 0
        para i = 0 hasta longitud(edades) - 1 hacer
            si edades[i] >= 18 entonces
                mayoresEdad = mayoresEdad + 1
            fin si
        fin para

    SALIDA:
        escribir "Mayores de edad: " + mayoresEdad
*/

function contarMayoresDeEdad() {
    let edades = [];
    const cantidadPersonas = parseInt(prompt('¿Cuántas edades desea ingresar?: '));

    for (let i = 0; i < cantidadPersonas; i++) {
        edades[i] = parseInt(prompt(`Edad ${i + 1}: `));
    }

    let mayoresEdad = 0;

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayoresEdad++;
        }
    }

    alert(`Mayores de edad: ${mayoresEdad}`);
}

contarMayoresDeEdad();