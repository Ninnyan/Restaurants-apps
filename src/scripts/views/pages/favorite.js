import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { templateSkeletonContainer } from '../../utils/skeleton-initiator';

const Favorite = {
  async render() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    restaurant.pop();
    return `
    <div class="main-title main-favorite" tabindex="0">
        <h7 id="main">Your Favorite Affame</h7>
    </div>

    <div  class="container-main-content">
      <loading-all></loading-all>
      <div class="restaurant-item__not__found">
        Tidak Ada Restaurant Favorite
      </div>
      <log-item id="unarchive">${templateSkeletonContainer(restaurant.length)}</log-item>
    </div>
        `;
  },

  async afterRender() {
    const loadRak = document.querySelector('loading-all');
    loadRak.style.display = 'flex';
    const timeToGet = await FavoriteRestaurantIdb.getAllRestaurant();
    setTimeout(async () => {
      loadRak.style.display = 'none';
      const logItem = document.querySelector('log-item');
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurant.pop();
      logItem.setLogList(restaurant);
      logItem._getContainer(logItem);
    }, 0);
  },
};

export default Favorite;
