window.addEventListener("load", ()=> {
  let long;
  let lat;
  const chiaveApi = "a2880494c35645fc28355f671a7803fb"
  let temperatureDescription = document.querySelector(".descrizione-meteo");
  let gradi = document.querySelector(".gradi");
  let location = document.querySelector(".location-timezone");
  let icona = document.querySelector(".icon");
  let selezioneTemp = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");
  var city = document.querySelector(".inputCity");


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;

      let api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${chiaveApi}`;

      fetch(api)
         .then(response => {
           return response.json();
         })
         .then(data => {

           let { temp } = data.main;
           gradi.textContent = Math.floor(temp - 273);


           let { name } = data;
           let {country} = data.sys;
           location.textContent = name + " " + country;

           let {description} = data.weather[0];
           temperatureDescription.textContent = description;

            let {icon} = data.weather[0];
           icona.textContent = icon;
           icona.innerHTML = `<img src="icone_m/${data.weather[0].icon}.svg"/>`;

           })
    });
  }
});
