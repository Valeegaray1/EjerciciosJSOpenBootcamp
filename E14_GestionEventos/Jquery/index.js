let boton = document.querySelector("button")

boton.addEventListener("click", () => alert("click"))

$("button").click(function () {
    console.log("hola, estoy usando jquery")
})