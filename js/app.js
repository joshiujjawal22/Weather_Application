var button=document.querySelector(".submit");
var city=document.querySelector(".city_name");
var nam=document.querySelector(".name");
var desc=document.querySelector(".desc");
var temp=document.querySelector(".temp");
var wind=document.querySelector(".wind_speed");
// Event Handler
button.addEventListener('click',function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=50a7aa80fa492fa92e874d23ad061374') //Fetching Using API
.then(response=>response.json())
.then(data=> {
// Breaking data from Object
nam.innerHTML="City Name : "+data['name'];
desc.innerHTML="Temperature : "+data['main']['temp'] +"Kelvin"; 		
temp.innerHTML="Description : "+data['weather']['0']['description']; 
wind.innerHTML="Wind Speed : "+data['wind']['speed']+"m/s";})
// Error if You entered wrong city
.catch(err => alert("Wrong City Name"));
})