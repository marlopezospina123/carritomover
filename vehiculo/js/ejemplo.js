var nombre = document.querySelector ("#nombre")
var imagen2 =document.querySelector(".imagen2")
nombre.addEventListener("mousedown",cambiarColor)
function cambiarColor(){
    nombre.style.color="blue"
    nombre.style.backgroundColor = "#00FFFF"
    nombre.innerHTML="QUE HAMBREEE"
}

var titulo = document.querySelector(".titulo")
var imagen1 = document.querySelector(".imagen1")

titulo.addEventListener("click", muestraImagen)
function muestraImagen (){
    imagen1.classList.remove('oculto')

}

