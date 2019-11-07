import './css/style.css';
import setup from '../src/js/setup';

setup.setupFavicon();
const info = document.getElementById('info');
const location = document.getElementById('location');
const event = document.getElementById('event');
const tempBox = document.getElementById('temperature');
const temp = document.getElementById('temp-num');
const degree = document.getElementById('degree');
const description = document.getElementById('description');
const input = document.querySelector('input');

const loadData = (data) => {
  const initTemp = setup.convertKtoF(data.main.temp);
  const celsius = setup.convertFtoC(initTemp);
  info.classList.remove('hide');
  info.classList.add('show');
  location.innerHTML = data.name;
  temp.innerHTML = initTemp;
  description.innerHTML = data.weather[0].description;
  setup.displayIcon(data.weather[0].icon);
  event.innerHTML = data.weather[0].main;
  tempBox.addEventListener('click', () => {
    if (degree.innerHTML === 'F') {
      temp.innerHTML = celsius;
      degree.innerHTML = 'C';
    } else {
      temp.innerHTML = initTemp;
      degree.innerHTML = 'F';
    }
  });
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let city = input.value;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed8cea7d8f1ace4966a60e851d68906e`;
    const getWeather = async (city) => {
      try {
        let response = await fetch(api);
        if (response.status == 200) {
          let data = await response.json();
          return data;
        }
        throw new Error(response.status);
      } catch (error) {
        alert('City not found. Try a different city.');
      }
    };

    getWeather(city).then((data) => {
      loadData(data);
    });
  }
});
