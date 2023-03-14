let bars_nav = document.getElementById("bars_nav")
let bars2 = document.getElementById("bars_2")
let bg_black = document.getElementById("bg_black")

let desplegable_menu = document.getElementById("desplegable-menu")

bars_nav.addEventListener("click", () => {
    desplegable_menu.classList.toggle("activado")
    desplegable_menu.classList.remove("desactivado")
    
    bg_black.classList.toggle("activado")
    bg_black.classList.remove("desactivado")

})
bars_2.addEventListener("click", () => {
    desplegable_menu.classList.remove("activado")
    desplegable_menu.classList.toggle("desactivado")

    bg_black.classList.toggle("desactivado")
    bg_black.classList.remove("activado")

})