import './css/style.css';
import setup from '../src/js/setup';

setup.setFavicon();
//     let info = document.getElementById('info');
let location = document.getElementById('location');
let event = document.getElementById('event');
let icon = document.getElementById('icon');
let tempBox = document.getElementById('temperature');
let temp = document.getElementById('temp-num');
let degree = document.getElementById('degree');
let description = document.getElementById('description');
const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let city = input.value;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed8cea7d8f1ace4966a60e851d68906e`;
    // const api2 = `${proxy}https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`;
    async function getWeather(city) {
      let response = await fetch(api);
      let data = await response.json();
      return data;
    }

    getWeather(city).then((data) => {
      console.log(data);
      const initTemp = convertKtoF(data.main.temp);
      const celsius = convertFtoC(initTemp);
      info.classList.remove('hide');
      info.classList.add('show');
      location.innerHTML = data.name;
      temp.innerHTML = initTemp;
      description.innerHTML = data.weather[0].description;
      icon.appendChild(getIcon(data.weather[0].icon));
      event.innerHTML = data.weather[0].main;
      tempBox.addEventListener('click', () => {
        if (degree.innerHTML === 'F') {
          console.log('Converting to celsius...');
          temp.innerHTML = celsius;
          degree.innerHTML = 'C';
        } else {
          console.log('Converting to F');
          temp.innerHTML = initTemp;
          degree.innerHTML = 'F';
        }
      });
    });
  }
});

function getIcon(id) {
  let resource = `http://openweathermap.org/img/wn/${id}@2x.png`;
  let icon = Object.assign(document.createElement('img'), { src: resource });
  return icon;
}
function convertKtoF(temp) {
  console.log(temp);
  let fahrenheit = Math.floor(temp * (9 / 5) - 459.67);
  return fahrenheit;
}
function convertFtoC(temp) {
  let celsius = Math.floor((temp - 32) * (5 / 9));
  return celsius;
}
function convertCtoF(temp) {
  let fahrenheit = Math.floor(temp * 1.8 + 32);
  return fahrenheit;
}
