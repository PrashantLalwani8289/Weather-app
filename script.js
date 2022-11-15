let weather = {
    URL : "https://api.open-meteo.com/v1/forecast?latitude=28.6353&longitude=77.2250&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,weathercode,visibility,windspeed_180m,temperature_180m,temperature_800hPa",
    fetchWeather : function () {
        fetch(this.URL).then ((response) => response.json()).then((data) => console.log(data));
    }
}