import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import favoriteItem from '../src/scripts/utils/favorite-item';

describe('Favoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div class="star-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the movie has not been favorited before', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite the movie', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('.star').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('.star').dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await favoriteItem.init({
      starButton: document.querySelector('.star-container'),
      restaurant: {},
    });

    document.querySelector('.star').dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([]);
  });
});
