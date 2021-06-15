import hamburgerMenu from "./menu_hamburguesa.js"; 

const d = document //para no escribir todo el rato document

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a") 
    //pasamos tanto el botón de hamburguesa como el propio menú panel
    // que hemos hecho, también cualquier link a dentro de menú
}) //Cuando cargue la página, mejor este que el evento "Load", 
//este no espera a que cargue la web imágenes, archivos... etc., 
//por lo tanto es muchísimo más rápido que "Load". 
//Le pasamos el evento de la carga llamando a la función

