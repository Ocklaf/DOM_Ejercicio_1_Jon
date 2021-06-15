export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document //para no escribir document todo el rato

    d.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){ 
        //si el click ha sido en lo que trae panelBtn o... IMPORTANTE
        //lo que contiene panelBtn (los span de button), se hace como
        //un selector css: panelBtn * = TODO lo que contenga panelBtn
        //así conseguimos que todo el botón funcione y no solo la parte
        //externa. Ya que los span (rallitas) se han incluido con el 
        //template string, que se usa para poder hacer el selector
        //tipo css con el * que indica, y todo lo que haya dentro (hijos)
            d.querySelector(panel).classList.toggle("is-active")
            //busca en la lista de clases de lo que te viene en panel
            //y si no tiene "is-active" se lo pones y si lo tiene
            //se lo quitas de la clase (método toggle())
            d.querySelector(panelBtn).classList.toggle("is-active")
            //le ponemos al propio botón la clase "is-active"
            //para que haga la transición a aspa X, tal y como 
            //indica la documentación de hamburger.css en su web
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}