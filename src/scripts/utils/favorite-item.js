import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const favoriteItem = {
  async init({ starButton, restaurant }) {
    this._starButton = starButton;
    this._restaurant = restaurant;

    await this._renderbutton();
  },

  async _renderbutton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  // eslint-disable-next-line class-methods-use-this
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

    return !!restaurant;
  },

  _renderFavorite() {
    this._starButton.innerHTML = '<i aria-label="favorite this restaurant" class="fa-regular fa-star star"></i>';

    const star = document.querySelector('.star');
    star.addEventListener('click', async (event) => {
      event.stopPropagation();
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderbutton();
    });
  },

  // eslint-disable-next-line no-dupe-class-members
  _renderFavorited() {
    this._starButton.innerHTML = '<i aria-label="unfavorite this restaurant" class="fa-solid fa-star star"></i>';

    const star = document.querySelector('.star');
    star.addEventListener('click', async (event) => {
      event.stopPropagation();
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderbutton();
    });
  },
};
// <i class="fa-regular fa-star star"></i>

export default favoriteItem;
