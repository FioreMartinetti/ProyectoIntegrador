window.addEventListener("load",  function(){

 // var nombre= prompt ("Ingrese su nombre")
 // var reemplazo = document.querySelector("p.saludo")
  //reemplazo.innerText= "Bienvenid@" + " " + nombre
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=73382cd9c327a899caf9d76fe965edc2&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      var generos = informacion.genres
      console.log(generos);
      for (var i = 0; i < generos.length; i++) {
        var nombre =  generos[i].name
        var id = generos[i].id


        var div = "";
        div += '<li class"generos">'
        div += '<a href="pelisPorGenero.html?idGenero='+id+'"><div class="uk-position-center uk-panel"><h1>' + nombre + '</h1></div></a>'
        div += '</li>'


        document.querySelector("#generos").innerHTML += div
      }
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })}
)

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
