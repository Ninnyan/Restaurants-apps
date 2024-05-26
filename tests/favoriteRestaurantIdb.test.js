import { itActsAsFavoriteMovieModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    restaurants.pop();
    (restaurants.forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    }));
  });

  itActsAsFavoriteMovieModel(FavoriteRestaurantIdb);
});
