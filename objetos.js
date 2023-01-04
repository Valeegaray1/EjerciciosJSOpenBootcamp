/*Crea un archivo llamado objetos.js que contenga las siguientes líneas*/

/*- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)*/
const datos = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    altura: 171,
    eresDesarrollador: true
}


/*- Una variable que obtenga tu edad a partir del objeto anterior*/
const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
]

/*- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s*/
/*- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const objAmigos = {
    nombre: "Irina",
    apellido: "Gauna",
    edad: 26,
    altura: 1.69,
    isDeveloper: false,

    nombre: "Nahuel",
    apellido: "Blanco",
    edad: 23,
    altura: 1.72,
    isDeveloper: false
 }

 const obj3 = {objAmigos,...objDatos}

 const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)

