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
}