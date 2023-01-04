/*Crea un archivo llamado conjuntos.js que contenga las siguientes líneas/*

/*- Un nuevo Set con los nombres de tu familia*/

const array = ["Jorge","Laura","Facundo", "Valentina"]
const miSet = new Set(array)

/*- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)*/

miSet.add("Valentina")

/*- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)*/

const miSetJs = miSet.add("Javascript")