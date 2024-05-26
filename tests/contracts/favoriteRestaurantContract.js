const itActsAsFavoriteMovieModel = (favoriteRestaurant) => {
  it('should return the resraurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });

    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    const restaurants = await favoriteRestaurant.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    const restaurants = await favoriteRestaurant.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    const restaurants = await favoriteRestaurant.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    const restaurants = await favoriteRestaurant.getAllRestaurant();
    restaurants.pop();

    expect(restaurants).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteRestaurant.putRestaurant({ id: 1, title: 'restaurant a' });
    favoriteRestaurant.putRestaurant({ id: 2, title: 'restaurant b' });
    favoriteRestaurant.putRestaurant({ id: 3, title: 'restaurant abc' });
    favoriteRestaurant.putRestaurant({ id: 4, title: 'restaurant abcd' });

    expect(await favoriteRestaurant.searchRestaurants('restaurant a')).toEqual([
      { id: 1, title: 'restaurant a' },
      { id: 3, title: 'restaurant abc' },
      { id: 4, title: 'restaurant abcd' },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteMovieModel };
