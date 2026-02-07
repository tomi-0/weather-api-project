// Functions that touch the DOM (updating text, images, or lists)
// want to edit content in original HTML

const weatherEmoji = document.querySelector('.weather-emoji')
const weatherData = document.querySelector('.api-data')

export function renderWeatherData(weatherObject) {
    weatherEmoji.setAttribute('src', `../assets/${weatherObject.condition}.png`)

    weatherData.innerHTML = `
        <div class="city-and-temp">
            <div class="city">${weatherObject.city}</div>
            <div class="current-temp">${parseFloat(weatherObject.temp).toFixed(0)}&deg;</div>
        </div>
        
        <div class="temperature-data">
            <div class="low-and-high-temp">
                <div class="high-temp">High: ${parseFloat(weatherObject.high_temp).toFixed(1)}&deg;</div>
                <div class="low-temp">Low: ${parseFloat(weatherObject.low_temp).toFixed(1)}&deg;</div>
            </div>
            <div class="temp-unit">
                <button class="celcius-button">&deg;C</button>
                <button class="fahrenheit-button">&deg;F</button>
            </div>
        </div>
    `;
}

export function showError() {
    weatherEmoji.src = ""
    weatherData.innerHTML = `<div class="error"> Could not find city</h1>`
}