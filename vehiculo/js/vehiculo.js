var Fondo = document.querySelector (".fondo")
var llanta = document.querySelector (".llanta")
var llanta2 = document.querySelector (".llanta2")
var luces = document.querySelector (".luces")
var fuego = document.querySelector (".fuego")

Fondo.addEventListener("click", FondoMover)

function FondoMover(){
    Fondo.classList.add("FondoMover")
    llanta.classList.add("llantaMover")
    llanta2.classList.add("llanta2Mover")
    luces.classList.remove('oculto')
    fuego.classList.add("fuegoMover")
    fuego.classList.remove("oculto1")
    luces.classList.add("lucesMover")

}
