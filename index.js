import darkMode from "./js/dark_mode.js";
import menuMovil from "./js/menu_movil.js";

const d = document,
      w = window;

d.addEventListener("DOMContentLoaded", e => {
    menuMovil("#check-button", ".header__nav-item a")
})

darkMode(".btn-theme", "dark-mode")

/* 
document.querySelectorAll('.header__nav-item a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('check-button').checked = false;
    });
});
 */
