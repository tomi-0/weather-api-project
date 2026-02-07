import { fetchData } from "./service.js"
import { renderWeatherData, showError } from "./ui.js"

// The "Entry Point" that links everything. Holds event listeners.

// 1. The "Brain" (Global Variables & Selectors)
// store all dunamic HTML elemetns
const input = document.querySelector('.search-input')
const submitButton = document.querySelector('.search-icon')
let currentUnit = 'C'
let currentWeatherData = null

// The "Triggers" (Event Listeners)
submitButton.addEventListener('click', async () => {
    console.log(input.value)
    try {
        // The "Messenger" (The API Logic)
        const weatherObject = await fetchData(input.value)
        currentUnit = 'C'
        currentWeatherData = weatherObject
        // The "Decorator" (DOM Manipulation)   
        renderWeatherData(weatherObject)  
    } catch (error) {
        // Dsiplays error message on site
        showError()
    }
})

const convertToFarenheit = temp => {
    return ((parseFloat(temp) * 9/5) + 32)
}

const container = document.querySelector('.weather-card') 
// Event Delegation (The "Listener" that never dies)
// when we called renderweather all old buttons get wiped due to the cahnging of innerHTML D
container.addEventListener('click', (e) => {
    // Check if the clicked element is one of our buttons
    if (e.target.classList.contains('fahrenheit-button')) {
        handleUnitChange('F');
    } else if (e.target.classList.contains('celcius-button')) {
        handleUnitChange('C');
    }
});

// handles changing of units
const handleUnitChange = (unit) => {
    if (unit === currentUnit || !currentWeatherData) return;

    let displayData;

    if (unit === 'F') {
        displayData = {
            ...currentWeatherData, // Copy all properties
            temp: convertToFarenheit(currentWeatherData.temp),
            low_temp: convertToFarenheit(currentWeatherData.low_temp),
            high_temp: convertToFarenheit(currentWeatherData.high_temp)
        };
    } else {
        // Since we saved the original 'C' data, we just use it directly
        displayData = currentWeatherData;
    }

    currentUnit = unit;
    renderWeatherData(displayData);
};



