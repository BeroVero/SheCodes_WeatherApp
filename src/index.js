// Get current date and time into app
weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let weekDayName = weekDays[now.getDay()];
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
// Insert date and time into HTML
//let initialDate = document.querySelector("#datetime")
document.getElementById(
  "datetime"
).innerHTML = `${weekDayName}, ${hours}:${minutes}`;

//display name of the city inputted
function displayCityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city").value;
  let cityDisplayed = document.querySelector("#displayed-city");
  cityDisplayed.innerHTML = cityInput;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(logValue);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", displayCityName);

// display current temperature of the city.
function logValue(response) {
  let temperature = Math.round(response.data.temperature.current);
  let tempSpan = document.querySelector("#temperature-value");
  tempSpan.innerHTML = temperature;
  console.log(temperature);
}

let units = `metric`;
let apiKey = `34f7boabet4bfa3ede2162049aca8d1a`;
