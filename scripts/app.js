import { fetchData } from "./service.js"
import { renderWeatherData, showError } from "./ui.js"

// The "Entry Point" that links everything. Holds event listeners.

// 1. The "Brain" (Global Variables & Selectors)
// store all dunamic HTML elemetns
const input = document.querySelector('.search-input')
const submitButton = document.querySelector('.search-icon')
const celciusButton = document.querySelector('.celcius-button')
const farenheitButton = document.querySelector('.farenheit-button')

// The "Triggers" (Event Listeners)
submitButton.addEventListener('click', async () => {
    console.log(input.value)
    try {
        // The "Messenger" (The API Logic)
        const weatherObject = await fetchData(input.value)
        console.log(weatherObject)

        // The "Decorator" (DOM Manipulation)   
        renderWeatherData(weatherObject)
    } catch (error) {
        // Dsiplays error message on site
        showError()
    }
})