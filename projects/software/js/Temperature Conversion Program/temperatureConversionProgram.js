//Temperature Conversion Program

const temperatureBox = document.getElementById("temperatureBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temperature;


function convertTemperature(){

    if(toFahrenheit.checked){
        temperature = Number(temperatureBox.value);         //gets the value of the text box and converts it to a number
        temperature = temperature * 9 / 5 + 32;             //Celsius to Fahrenheit equation.
        result.textContent = temperature.toFixed(1) + "°F"; //Changes result in web page to temp.
    }
    else if(toCelsius.checked){
        temperature = Number(temperatureBox.value);         //gets the value of the text box and converts it to a number
        temperature = (temperature - 32) * (5 / 9) ;             //Fahrenheit to Celsius equation.
        result.textContent = temperature.toFixed(1) + "°C"; //Changes result in web page to temp.
    }

    //can be expanded to Kalvin

    
    else{
        result.textContent = "Select a unit";
    }
}