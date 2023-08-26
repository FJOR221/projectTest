const appKey = `f36545445b5719601c6b4551494d5728`;
const CityPrompt = prompt('Какой город?');

const link = `http://api.openweathermap.org/geo/1.0/direct?q=${CityPrompt}&limit=5&appid=${appKey}`;
const link2 = `https://api.openweathermap.org/data/2.5/weather?`;

const store = {
    city: document.getElementById('.CityPrompt'),
}

const LocationData = async () => {
    const result =  await fetch (`${link}&query=${store.city}`);
    const data = await result.json();
    
    console.log(data);
    
    const {lon, lat} = data[0];
    const WeatherData = await fetch(`${link2}&lat=${lat}&lon=${lon}&appid=${appKey}`);
    const data2 = await WeatherData.json();

    console.log(data2);
}

LocationData()