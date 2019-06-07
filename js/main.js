const ativa = document.getElementById("btn-ativa");
const containermenu = document.getElementById("mobile-container");
const menudesktop = document.getElementById("menu-desktop");

let contador = 0;

ativa.addEventListener('click', (e) => {
    containermenu.classList.remove("_hiddentop");
    containermenu.classList.add("_activemenu");
    menudesktop.classList.add("color-mobile");
    contador++;
    if (contador == 2) {
        containermenu.classList.remove("_activemenu");
        menudesktop.classList.remove("color-mobile");
        containermenu.classList.add("_hiddentop");
        contador = 0;
    }
});
