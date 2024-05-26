// eslint-disable-next-line import/no-named-as-default
import RestaurantSource from '../../data/restaurant-source';
import { templateSkeletonContainer } from '../../utils/skeleton-initiator';

const Home = {
  async render() {
    const restaurant = await RestaurantSource.home();
    restaurant.pop();
    return `
    <div class="hero" tabindex="0" aria-label="Selamat Datang di Alffamme Taste, Tempat Rating Restaurant Terpercaya" alt="">
        <span class="judul-hero" >Bienvenue,</span>
        <span class="judul2-hero">Alffamme Taste</span>
    </div>

    <div class="main-title" tabindex="0">
        <h1>Feel Your Taste</h1>
    </div>
    
    <div  class="container-main-content">
      <loading-all></loading-all>
      <div class="restaurant-item__not__found">
      </div>
      <log-item id="unarchive">${templateSkeletonContainer(restaurant.length)}</log-item>
    </div>
    `;
  },

  async afterRender() {
    const loadRak = document.querySelector('loading-all');
    loadRak.style.display = 'flex';
    const timeToGet = await RestaurantSource.home();
    setTimeout(async () => {
      loadRak.style.display = 'none';
      const restaurant = await RestaurantSource.home();
      restaurant.pop();
      const logItem = document.querySelector('log-item');
      logItem.setLogList(restaurant);
      logItem._getContainer(logItem);
    }, 0);
  },
};

export default Home;
