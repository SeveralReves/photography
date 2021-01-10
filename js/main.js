function changeClass() {
    var nodo = document.getElementById("nodo");
    var boton = document.getElementById("burger");

    if (nodo.className.match("rotate")){
        nodo.classList.remove("rotate");
        boton.classList.remove("active");
    }else{
        nodo.classList.add("rotate");
        boton.classList.add("active");
    }

}