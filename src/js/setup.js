import fav from '../img/favicon.ico';

const setup = {
  setFavicon: () => {
    const setFav = document.getElementById('favicon');
    setFav.href = fav;
  },
  setElements: () => {
    let info = document.getElementById('info');
    let location = document.getElementById('location');
    let event = document.getElementById('event');
    let icon = document.getElementById('icon');
    let tempBox = document.getElementById('temperature');
    let temp = document.getElementById('temp-num');
    let degree = document.getElementById('degree');
    let description = document.getElementById('description');
    const input = document.querySelector('input');
    return {
      info,
      location,
      event,
      icon,
      tempBox,
      temp,
      degree,
      description,
      input
    };
  }
};
export default setup;
