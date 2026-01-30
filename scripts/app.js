import { fetchData } from "./service.js"

// The "Entry Point" that links everything. Holds event listeners.
const city = "London"

// 1. The "Brain" (Global Variables & Selectors)
// store all dunamic HTML elemetns
const searchBar = document.querySelector('.search-input')
const submitButton = document.querySelector('.search-icon')

const weatherIcon = document.querySelector('.weather-emoji')
const cityName = document.querySelector('.city')
const currentTemp = document.querySelector('.current-temp')
const lowestTemp = document.querySelector('.low-temp')
const highestTemp = document.querySelector('.high-temp')

const celciusButton = document.querySelector('.celcius-button')
const farenheitButton = document.querySelector('.farenheit-button')

// 2. The "Messenger" (The API Logic)
const weatherObject = await fetchData('Lagos')
console.log(weatherObject)

// 3. The "Translator" (Data Processing)



// 4. The "Decorator" (DOM Manipulation)



// 5. The "Triggers" (Event Listeners)