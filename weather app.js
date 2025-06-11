async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey};

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = <p>${error.message}</p>;
  }
}

function displayWeather(data) {
  const weatherDiv = document.getElementById('weatherResult');
  weatherDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Condition:</strong> ${data.weather[0].description}</p>
  `;
}