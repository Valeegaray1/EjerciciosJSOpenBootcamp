const nombre = "Valentina";
const apellido = "Garay";

const datos = {
    nombre,
    apellido
}

localStorage.setItem("datos", JSON.stringify(datos))
sessionStorage.setItem("datos", JSON.stringify(datos))

const now = new Date()

document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`
