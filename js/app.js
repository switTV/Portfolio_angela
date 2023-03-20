let bars_nav = document.getElementById("bars_nav")
let chevron_left = document.getElementById("chevron_left")
let bg_black = document.getElementById("bg_black")
let element_carrusel = document.querySelectorAll(".img-element")
let carrusel_container = document.getElementById("carousel_container")

let desplegable_menu = document.getElementById("desplegable-menu")

bars_nav.addEventListener("click", () => {
    desplegable_menu.classList.toggle("activado")
    desplegable_menu.classList.remove("desactivado")
    
    bg_black.classList.toggle("activado")
    bg_black.classList.remove("desactivado")

})
chevron_left.addEventListener("click", () => {
    desplegable_menu.classList.remove("activado")
    desplegable_menu.classList.toggle("desactivado")

    bg_black.classList.toggle("desactivado")
    bg_black.classList.remove("activado")

})
bg_black.addEventListener("click", () => {
    desplegable_menu.classList.remove("activado")
    desplegable_menu.classList.toggle("desactivado")

    bg_black.classList.toggle("desactivado")
    bg_black.classList.remove("activado")

})

window.addEventListener("resize", adapatarResize)

function adapatarResize() {
    if (window.innerWidth >= 1024){
        element_carrusel.forEach(elementsCarrusel => {
            elementsCarrusel.classList.add("desactivado")
            carrusel_container.classList.remove("carousel__lista")
        })


    }
    else {
        element_carrusel.forEach(elementsCarrusel => {
            elementsCarrusel.classList.toggle("activado")
            
            carrusel_container.classList.add("carousel__lista")
            carrusel_container.classList.remove("carousel__desactivado")
        })
    }
}

adapatarResize()

console.log(window.innerWidth)