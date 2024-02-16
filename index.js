const apiKey= "85dcec9461dfe4a5992fbaeca0927327";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" ;

const searchbtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
}
searchbtn.addEventListener("click",()=>{
    
    checkWeather(searchBox.value);
})
