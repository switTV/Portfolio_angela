let bars_nav = document.getElementById("bars_nav")
let chevron_left = document.getElementById("chevron_left")
let bg_black = document.getElementById("bg_black")
let element_carrusel = document.querySelectorAll(".img-element")
let carrusel_container = document.getElementById("carousel_container")

let desplegable_menu = document.getElementById("desplegable-menu")

bars_nav.addEventListener("click", () => {
    desplegable_menu.classList.remove("desactivado")
    desplegable_menu.classList.add("activado")

    chevron_left.classList.add("activado")
    chevron_left.classList.remove("desactivado")

    bg_black.classList.add("activado")
    bg_black.classList.remove("desactivado")
})

chevron_left.addEventListener("click", () => {
    desplegable_menu.classList.add("desactivado")
    desplegable_menu.classList.remove("activado")

    bg_black.classList.remove("activado")
    bg_black.classList.add("desactivado")
})

bg_black.addEventListener("click", () => {
    desplegable_menu.classList.add("desactivado")
    desplegable_menu.classList.remove("activado")

    bg_black.classList.remove("activado")
    bg_black.classList.add("desactivado")
})

window.addEventListener("resize", adapatarResize)

function adapatarResize(desktop) {
    if (window.innerWidth >= desktop){
        element_carrusel.forEach(elementsCarrusel => {
            elementsCarrusel.classList.add("desactivado")
            carrusel_container.classList.remove("carousel__lista")
        })


    }
    else {
        element_carrusel.forEach(elementsCarrusel => {
            elementsCarrusel.classList.toggle("activado")
            carrusel_container.classList.toggle("carousel__lista")
        })
    }
}

adapatarResize(1024)

console.log(window.innerWidth)