function getWeather() {
  const apiKey = '7846ed3ecd8a764b1b0ee48f09165e6f'; // Replace with your API key
  const city = document.getElementById('city').value;

  if (city === '') {
      alert('Please enter a city name');
      return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          displayWeather(data);
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

function displayWeather(data) {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = '';

  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');
  weatherInfo.innerHTML = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature} &#8451;</p>
      <p>Description: ${description}</p>
  `;

  weatherContainer.appendChild(weatherInfo);
}
