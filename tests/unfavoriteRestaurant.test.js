import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import favoriteItem from '../src/scripts/utils/favorite-item';

describe('Unfavoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div class="star-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been favorited', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been favorited', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([]);
  });

  it('should not throw error when user click unfavorite widget if the unfavorite restaurant is not in the list', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([]);
  });
});
