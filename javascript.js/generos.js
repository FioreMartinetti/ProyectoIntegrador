window.addEventListener("load", function(){
var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=73382cd9c327a899caf9d76fe965edc2&language=es-AR"

//Validación del campo de búsqueda al hacer enter
document.querySelector(".buscador").onkeypress = function(evento) {

  if (evento.code == "Enter") {
    var busqueda = document.querySelector(".buscador");
    if (busqueda.value.length >= 3) {
      location.href = "resultados.html?buscar=" + busqueda.value
    }
    else {
      alert("Llenar el campo de búsqueda. Tiene que tener al menos 3 caracteres.")
    }

  }
}


})
