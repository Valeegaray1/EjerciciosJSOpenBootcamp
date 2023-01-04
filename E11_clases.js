class Estudiante {
    nombre = "Valentina"
    asignaturas= ["Javascript","HTML","CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
        
    }
}

const Estudiante2 = new Estudiante()
console.log(estudiante.ObtenDatos())