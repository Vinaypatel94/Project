const apikey = "e674cee1205f890c3ac0bd258c3922f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("#searchBox");
const searchbtn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    // document.querySelector(".airquality").innerHTML=data.

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloud1.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    }
    
    document.querySelector(".Weather").style.display = "block"

}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})
// checkweather();