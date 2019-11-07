import fav from '../img/favicon.ico';

const setup = {
  convertKtoF: (temp) => {
    let fahrenheit = Math.floor(temp * (9 / 5) - 459.67);
    return fahrenheit;
  },
  convertFtoC: (temp) => {
    let celsius = Math.floor((temp - 32) * (5 / 9));
    return celsius;
  },
  setupFavicon: () => {
    const setFav = document.getElementById('favicon');
    setFav.href = fav;
  },
  displayIcon: (id) => {
    const img = document.querySelector('img');
    img.src = `http://openweathermap.org/img/wn/${id}@2x.png`;
    return img;
  }
};

export default setup;
