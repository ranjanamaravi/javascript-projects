const apiKey = '7f66afccf68f47921b08a38b9495f6a3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchinput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        
    }
    else {
        let data = await response.json();
        console.log(data)

        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "&degC"
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' km/h';

        weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';

    }
    searchinput.value = '';

}

searchBtn.addEventListener('click', () => {
    if (searchinput.value === '') {
        alert('Please Enter a city name!')
    }
    else {
        checkWeather(searchinput.value)
    }

});
