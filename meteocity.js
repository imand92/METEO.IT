var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var loc = document.querySelector(".location-timezone");
var desc = document.querySelector(".descrizione-meteo");
var temp = document.querySelector(".gradi");
var imag = document.querySelector(".icon");

button.addEventListener ("click", function(){
  fetch ("https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +"&appid=a2880494c35645fc28355f671a7803fb")
  .then(response => response.json())
  .then (data => {
    var nameValue = data["name"];
    var countryValue = data["sys"]["country"]
    var tempValue = data["main"]["temp"];
    var descValue = data["weather"][0]["description"];
    var iconValue = data["weather"][0]["icon"];

    loc.innerHTML = nameValue + " " + countryValue;


    desc.innerHTML = descValue;
    temp.innerHTML = Math.floor (tempValue - 273);

    imag.textContent = iconValue;
    imag.innerHTML = `<img src="icone_m/${data.weather[0].icon}.svg"/>`;;

  })

})
