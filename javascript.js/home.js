window.addEventListener("load", function(){

  var api_key = "73382cd9c327a899caf9d76fe965edc2"
  var url= "https://api.themoviedb.org/3/genre/movie/list?api_key="+api_key
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

  })
  .catch(function(error) {
   console.log("Error: " + error);
  })
})
 
