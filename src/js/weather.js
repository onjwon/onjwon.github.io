 const city = document.querySelector("#weather span:first-child");
 const weather = document.querySelector("#weather span.weth");
 const temp = document.querySelector("#weather span:last-child");
 const API_KEY = "d67b4647ec6e3bf94e153cfda06b2a47";

function onGeoOk(position) {
    console.log(position);
   const lat = position.coords.latitude;
   const lng = position.coords.longitude;
   console.log("You live in", lat, lng);
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
   //console.log(url);
   fetch(url)
     .then((response) => response.json())
     .then((data) => {
       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main}`;
       temp.innerText = `${data.main.temp}`;
     });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);