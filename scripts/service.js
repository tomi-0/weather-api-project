import { API_KEY } from './config.js'

// Logic to fetch data and "clean" it into a simple object
export async function fetchData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Couldn't fetch data")
    }

    const weatherData = await response.json()

    return {
        city : weatherData.name,
        // temp is fetched in celcius
        temp: weatherData.main.temp.toFixed(0),
        low_temp: weatherData.main.temp_min.toFixed(1),
        high_temp: weatherData.main.temp_max.toFixed(1),
        condition: weatherData.weather[0].main,
    }
}

