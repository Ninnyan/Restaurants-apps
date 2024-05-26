Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Reviewing One Restaurants', async ({ I }) => {
  I.seeElement('.restaurant__title');

  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantName);

  I.seeElement('.review-button');
  I.click('.review-button');

  I.seeElement('#name-reviewer');
  I.fillField('#name-reviewer', 'Orang2');

  I.seeElement('#review-reviewer');
  I.fillField('#review-reviewer', 'Balala2');

  I.seeElement('.add-review');
  I.click('.add-review');
});
