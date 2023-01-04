/*Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch*/

const logger = require('./logger')

function error() {
    throw new Error("Error!");
  }
  
  try {
    error();
  } catch (e) {
    logger.log("error", e.toString());
  }