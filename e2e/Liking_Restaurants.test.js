const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Favoriting one Restaurant', async ({ I }) => {
  I.see('Tidak Ada Restaurant Favorite', '.restaurant-item__not__found');

  I.amOnPage('/#/home');

  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantName);

  I.seeElement('.star');
  I.click('.star');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
