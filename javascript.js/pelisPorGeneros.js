window.addEventListener("load", function(){
  var urlSearchParams = new URLSearchParams(window.location.search)
  var pelisPorGenero = urlSearchParams.get('pelisPorGenero')
  console.log(pelisPorGenero);

  fetch("")
  .then(function(response) {
   return response.json()
  })
  .then(function(respuesta) {
   console.log(respuesta)
}
