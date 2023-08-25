const CityPrompt = prompt('Какой город?');

const link = `http://api.openweathermap.org/geo/1.0/direct?q=${CityPrompt}&limit=5&appid=f36545445b5719601c6b4551494d5728`;

const store = {
    city: document.getElementById('.CityPrompt'),
}

const WeatherData = async () => {
    const result =  await fetch (`${link}&query=${store.city}`);
    const data = await result.json();
    
    console.log(data)
}

WeatherData()