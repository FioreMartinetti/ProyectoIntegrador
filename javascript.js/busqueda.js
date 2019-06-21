window.addEventListener ("load",function() {
  var queryString = new URLSearchParams(location.search)
  var buscador = queryString.get("buscador")

  fetch("https://api.giphy.com/v1/gifs/search?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&q=" + buscador +"&limit=25&offset=0&rating=G&lang=en")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var arrayDePeliculas = informacion.data
      console.log(arrayDePeliculas);

      for (var i = 0; i < arrayDePeliculas.length; i++) {
        var id = arrayDePeliculas[i].id
        var title = arrayDePeliculas[i].title
        var url = arrayDePeliculas[i].images.original.url

        document.querySelector("div").innerHTML += "<p><a href=resultados.html?id=" + id + ">" + title + "</a></p>"
        document.querySelector("div").innerHTML += "<img src=" + url + ">"
      }
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
}
