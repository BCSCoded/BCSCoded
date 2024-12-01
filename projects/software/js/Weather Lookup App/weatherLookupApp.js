// Weather App

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");

const weatherCard = document.querySelector(".weatherCard");

const apiKey = "b6545d21c85b4175a6c221716242711";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); //Stops form from refreshing the page
    cityInput.textContent = "";
    const city = cityInput.value;//Grabs the value in the input box as a string! Required for getWeatherData(city)!
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } 
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a City!")
    }
})

async function getWeatherData(city) {
    
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`; //HAS TO BE CITY NOT CITYIMPUT!

    const response = await fetch(apiURL); //once we have our apiURL, we can contiue.

    // console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data!");
    }

    return await response.json();
}

function displayWeatherInfo(weatherData) {
    // console.log(weatherData);
    const {location: {name: city},
           current: {temp_f: temp_F, humidity: humidity, 
           condition: {text, icon}}}//nexted object in object. Needs to be in 'current' {} to be defined.
            = weatherData;
           
    weatherCard.textContent = "";
    weatherCard.style.display = "flex";

    const cityDisplay = document.createElement("h1")
    const tempatureDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descriptionDisplay = document.createElement("p")
    const weatherEmojiDisplay = document.createElement("img")


    cityDisplay.textContent = city;
    tempatureDisplay.textContent = `${temp_F}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = text;


    if(icon !== ""){
        weatherEmojiDisplay.src = icon;
    }
    else{
        weatherEmojiDisplay.src = "images/questionMark.png"
    }
    cityDisplay.classList.add("cityDisplay");
    tempatureDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descriptionDisplay.classList.add("descriptionDisplay");
    weatherEmojiDisplay.classList.add("weatherEmojiDisplay");

    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempatureDisplay);
    weatherCard.appendChild(humidityDisplay);
    weatherCard.appendChild(descriptionDisplay);
    weatherCard.appendChild(weatherEmojiDisplay);
}

function getWeatherEmoji(weatherData, weatherId) {
    weatherId = Number(weatherId)+2;
    if(weatherId === weatherData.current.condition.code){
        return weatherData.current.condition.icon;
    }
    else{
        return 'images/questionMark.png'
    }
}

function displayError(message) {
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay)
}