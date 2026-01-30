
const city = "London"

const searchBar = document.querySelector('search-input')
const submitButton = document.querySelector('search-icon')

async function fetchData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const repsonse = await fetch(apiUrl)
    console.log(repsonse)
}

fetchData()

