var button = document.querySelector(".submit");
var city = document.querySelector(".city_name");
var nam = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind_speed");
// Event Handler
button.addEventListener('click', function (e) {
    e.preventDefault();
    loadData();
})


function loadData() {
    spinner.removeAttribute('hidden');
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            spinner.setAttribute('hidden', '');
            nam.innerHTML = "City Name : " + data['name'];
            desc.innerHTML = "Temperature : " + data['main']['temp'] + "Kelvin";
            temp.innerHTML = "Description : " + data['weather']['0']['description'];
            wind.innerHTML = "Wind Speed : " + data['wind']['speed'] + "m/s";
        });
}