let bars_nav = document.getElementById("bars_nav")
let chevron_left = document.getElementById("chevron_left")
let bg_black = document.getElementById("bg_black")

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