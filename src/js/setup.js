import fav from '../img/favicon.ico';

const setup = {
  setFavicon: () => {
    const setFav = document.getElementById('favicon');
    setFav.href = fav;
  }
};
export default setup;
