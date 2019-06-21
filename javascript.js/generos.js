window.addEventListener("load", function(){
var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=73382cd9c327a899caf9d76fe965edc2&language=es-AR"

var api_key = "73382cd9c327a899caf9d76fe965edc2"
var url= "https://api.themoviedb.org/3/genre/movie/list?api_key=" + api_key

// Conectamos nuestra API key con la API key de la página.
  fetch(url)
  .then(function(response) {
   return response.json()
  })
  .then(function(respuesta) {
   console.log(respuesta)
   ; //imprimo todo lo que me devuelve el servidor
   console.log(respuesta.genres); //imprimo el array data, que contiene 25 elementos
   var arrayDeGeneros = respuesta.genres;
   var genero
   var id
   var name
   for (var i = 0; i < arrayDeGeneros.length; i++) {
     genero = arrayDeGeneros[i]
     console.log(genero);
     id = genero.id
     console.log(id);
     name = genero.name
     console.log(name);

     var li;
     li = '<li>'
     li += '<div"><h1>' + name + '</h1></div>'
     li += '</li>'


    console.log(li);

    document.querySelector("#generos").innerHTML += li
   }
  })
  .catch(function(error) {
   console.log("Error: " + error);
  })



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
