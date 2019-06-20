window.addEventListener("load", function(){
// El window.addEventListener ("load, function()") permite que antes se cargue la página antes de se ejecuta
// la funcion que queremos darle.

  var api_key = "73382cd9c327a899caf9d76fe965edc2"
  var url= "https://api.themoviedb.org/3/genre/movie/list?api_key="+api_key
  // Conectamos nuestra API key con la API key de la página.
  fetch(url)
  .then(function(response) {
   return response.json()
  })
  .then(function(respuesta) {
   console.log(respuesta); //imprimo todo lo que me devuelve el servidor
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
   }
   document.querySelector("p").innerHTML = name
   document.querySelector("h2").innerHTML = name
  })
  .catch(function(error) {
   console.log("Error: " + error);
  })
  //
  document.querySelector(".buscador").onkeypress = function(evento) {

    if (evento.code == "Enter") {
      var busqueda = document.querySelector(".buscador");
      if (busqueda.value.length >= 3) {
        location.href = "resultados.html?buscar=" + busqueda.value
      }
      else {
        alert("El campo de búsqueda debe tener al menos 3 caracteres.")
      }
    }
  }

fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + api_key)
.then(function(response) {
 return response.json()
 })
.then(function(respuesta) {
console.log(respuesta);
console.log(respuesta.popular);
var arrayDePopulares = respuesta.popular;
var popular
var id
var name
for (var i = 0; i < arrayDePopulares.length; i++) {
  popular = arrayDePopulares[i]
  console.log(popular);
  id = popular.id
  console.log(id);
  name = popular.id
  console.log(name);
}
document.querySelector("p").innerHTML = name
document.querySelector("h2").innerHTML = name
 })
.catch(function(error) {
 console.log("Error: " + error);
})
//Películas más populares

})
//Modal(incompleto)
