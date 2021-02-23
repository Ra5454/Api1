var input = document.querySelector('#ciudad');
var country = document.querySelector('#pais');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var temp_max = document.querySelector('.temp_max');
var temp_min = document.querySelector('.temp_min');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f228b1610f36eafb695ad6fb62d274a1&lang="es"&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var tempmax = data['main']['temp_max'];
  var tempmin = data['main']['temp_min'];
  var country1 = data['country'];
  var nameValue = data['name'];

  main.innerHTML = nameValue;
  country.innerHTML = country1;
  temp.innerHTML = "Temp: "+tempValue+"C";
  temp_max.innerHTML = "Max: "+tempmax+"C";
  temp_min.innerHTML = "Min: "+tempmin+"C";
  input.value ="";
  

})

.catch(err => Swal.fire({
  icon: 'error',
  title: 'Faltan datos',
  text: 'Error: Rellena los campos Nombre,Ciudad,País!'
}));
})















