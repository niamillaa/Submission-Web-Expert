/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('LikingRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#empty-content');
  I.see('Not Found', '.restaurant-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Not Found', '.restaurant-item-not-found');

  I.amOnPage('/');

  // I.seeElement('.restaurant-item__content h3 a');
  I.waitForElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.seeElement('#favoriteButton');
  I.waitForElement('#favoriteButton');

  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  // I.seeElement('.restaurant-item');
  I.waitForElement('.restaurant-item');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Not Found', '.restaurant-item-not-found');

  I.amOnPage('/');

  // I.seeElement('.restaurant-item__content h3 a');
  I.waitForElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.seeElement('#favoriteButton');
  I.waitForElement('#favoriteButton');

  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  // I.seeElement('.restaurant-item');
  I.waitForElement('.restaurant-item');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(locate('.restaurant-item__content h3 a').first());

  // I.seeElement('#favoriteButton');
  I.waitForElement('#favoriteButton');

  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  // I.seeElement('.restaurant-item-not-found');
  I.waitForElement('.restaurant-item-not-found');

  const noFavoriteRestaurant = await I.grabTextFrom('.restaurant-item-not-found');

  assert.strictEqual(noFavoriteRestaurant, 'Favorite Restaurant Not Found');
});
