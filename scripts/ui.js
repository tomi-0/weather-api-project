// Functions that touch the DOM (updating text, images, or lists)
// want to edit content in original HTML

const weatherEmoji = document.querySelector('.weather-emoji')
const weatherData = document.querySelector('.api-data')

export function renderWeatherData(weatherObject) {
    weatherEmoji.setAttribute('src', `../assets/${weatherObject.condition}.png`)

    weatherData.innerHTML = `
        <div class="city-and-temp">
            <div class="city">${weatherObject.city}</div>
            <div class="current-temp">${weatherObject.temp}&deg;</div>
        </div>
        
        <div class="temperature-data">
            <div class="low-and-high-temp">
                <div class="high-temp">High: ${weatherObject.high_temp}&deg;</div>
                <div class="low-temp">Low: ${weatherObject.low_temp}&deg;</div>
            </div>
            <div class="temp-unit">
                <button class="celcius-button">&deg;C</button>
                <button class="farenheit-button">&deg;F</button>
            </div>
        </div>
    `;
}

export function showError() {
    weatherEmoji.innerHTML = "</>"
    weatherData.innerHTML = `<div class="error"> Could not find city</h1>`
}