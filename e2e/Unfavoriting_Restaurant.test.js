const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/#/home');

  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantName);

  I.seeElement('.main-detail');
  I.click('.star');
});

Scenario('Unfavoriting One Restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title');

  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantName);

  I.seeElement('.main-detail');
  I.click('.star');

  I.amOnPage('/#/home');
  I.seeElement('.restaurant__title');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
