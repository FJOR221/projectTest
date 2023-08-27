const appKey = `f36545445b5719601c6b4551494d5728`;
const CityPrompt = prompt('Какой город?');
const link = `http://api.openweathermap.org/geo/1.0/direct?`
const link2 = `https://api.openweathermap.org/data/2.5/weather?`;

let store = {
    city:'London',
    main: 0,
    wind: 0,
    weather: 0,
    visibility: 0,

}

const LocationData = async () => {
    const result =  await fetch (`${link}q=${store.city}&limit=5&appid=${appKey}`);
    const data = await result.json();

    console.log(data);
    
    const {lon, lat} = data[0];
    const WeatherData = await fetch(`${link2}&lat=${lat}&lon=${lon}&appid=${appKey}`);
    const data2 = await WeatherData.json();
    
    const {
        main, wind, weather, visibility
   } = data2;
   
   store = {
       ...store,
       main,
       wind,
       weather,
       visibility,
       temp: main.temp,
       tempMax: main.temp_max,
       tempMin: main.temp_min,
   }


    console.log(store);
}

LocationData()