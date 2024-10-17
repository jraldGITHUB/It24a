class WeatherApp{
    constructor(apiKey){

        this.apiKey = apiKey;
        this.cityInput = document.getElementById('cityInput');
        this.getWeatherBtn = document.getElementById('getWeatherBtn');

        this.getLocationBtn = document.getElementById('getLocationBtn');

        this.weatherCard = document.getElementById('weatherCard');
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.description = document.getElementById('description');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');

        this.getWeatherBtn.addEventListener('click', () => this.fetchWeather());
        this.getLocationBtn.addEventListener('click', () => this.fetchWeatherByLocation());
    
    }
    displayWeather(data){
        this.cityName.textContent = `${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})`;
        this.temperature.textContent = `Temperature: ${data.main.temp} °C`;
        this.description.textContent = `Weather: ${data.weather[0].description}`;
        this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
        this.windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }
}