const country = document.querySelector(".country");
const tempValue = document.querySelector(".temp-value");
const weatherValue = document.querySelector(".weather-value");
const humiditiy = document.querySelector(".humiditiy");
const wind = document.querySelector(".wind");
const form = document.querySelector(".search");
const searchBar = document.querySelector(".search__bar");

async function getData(city) {
    try {
        const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=e218499dc20980089bc2120cb77ea2d2";
        const res = await fetch(API_URL);
        const data = await res.json();
        createWeatherCard(data);
    } catch (err) {
        alert("City not found");
        country.innerHTML = "";
        tempValue.innerHTML = "";
        weatherValue.innerHTML = "";
        humiditiy.innerHTML = "";
        wind.innerHTML = "";
    }
}

function createWeatherCard(data) {
    country.innerHTML = data.name;
    tempValue.innerHTML = data.main.temp + "°C";
    weatherValue.innerHTML = `<img class="icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"> ${data.weather[0].main}`;
    humiditiy.innerHTML = `Humidity: ${data.main.humidity}%`;
    wind.innerHTML = `Wind: ${data.wind.speed} m/s`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const country = searchBar.value;
    if (country) {
        getData(country);
        searchBar.value = "";
    } else {
        alert("Please enter a country");
    }
})

