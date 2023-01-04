
/*EJERCICIO 4 - CADENAS DE TEXTO*/

/*- Una cadena de texto con tu Nombre*/
let nombre = "valentina";

/*- Otra cadena de texto con tu Apellido*/
let apellido = "Garay";

/*Una cadena de texto que se llame "estudiante" concatenando tu Nombre y Apellido con un espacio */
let estudiante = nombre.concat(apellido)

/* Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas*/
let estudianteMayus = estudiante.toUpperCase()

/*Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
*/
let estudianteMinus = estudiante.toLowerCase()

/*Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios*/
let estudianteNum = estudiante.length

/*Una variable que contenga la primera letra del Nombre*/
let primeraLetra = nombre.charAt(0)

/*Otra variable que contenga la última letra del Apellido*/
let ultimaLetra = nombre.charAt(8)

/*Una cadena de texto que elimine los espacios de la variable "estudiante"*/
let espacios = estudiante.replace(/\s+/g, '')

/*Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/
let incluyeNombre = estudiante.includes(nombre)
