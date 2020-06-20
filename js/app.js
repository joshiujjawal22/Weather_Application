var button = document.querySelector(".submit");
var city = document.querySelector(".city_name");

// Event Handler
button.addEventListener('click', function (e) {
    e.preventDefault();
    loadData();
})


function loadData() {
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {


            var tbl=document.getElementById('tbl');
            
            // Insertion of rows
            var x=tbl.insertRow(1); 

            /* ----------------Insertion of cells(columns)----------------------*/

            // Country Name
            x.insertCell().innerHTML=data['name'];
            tbl.rows[1].cells[0].style.color="Blue";



            // Confirmed cases
            x.insertCell().innerHTML=data['main']['temp'] + "Kelvin";
            tbl.rows[1].cells[1].style.color="green";

            
            x.insertCell().innerHTML=data['weather']['0']['description'];
            tbl.rows[1].cells[2].style.color="red";

            

            // Total Deaths
            x.insertCell().innerHTML=data['wind']['speed'] + "m/s";
            tbl.rows[1].cells[3].style.color="#0984e3";

            
        
            
           
        });
}
