
/*
   Author: Hubert Abedi Amoah
   Course: WDD 131
   Assignment: Place Webpage
*/

// Static weather values
const temperature = 29;
const windSpeed = 12;

// Calculate wind chill using the metric formula
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Default wind chill value
let windChill = "N/A";

// Check if conditions are suitable for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Display weather information
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;
document.querySelector("#wind-chill").textContent = windChill;

// Display the current year
const currentYear = new Date().getFullYear();

document.querySelector("#current-year").textContent = currentYear;

// Display the last modified date
const lastModified = document.lastModified;

document.querySelector("#last-modified").textContent = lastModified;
