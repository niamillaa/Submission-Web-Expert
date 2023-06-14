/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    // const hero = document.querySelector('.hero');
    // hero.style.display = 'none';
    return `
        <div class="content">
            <h2 class="content__heading">Your Favorite Restaurant</h2>
            <div id="restaurants" class="restaurants">
            </div>
            <div id="empty-content"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('#restaurants');
    const empty = document.getElementById('empty-content');

    //   restaurants.forEach((restaurant) => {
    //     restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    //   });
    // },

    if (restaurants.length < 1) {
      empty.innerHTML += `
    <div id"message">
      <h2 tabindex="0" class="restaurant-item-not-found">Not Found</h2>
    </div>
    `;

      container.innerHTML = '';
    } else if (restaurants.length >= 1) {
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      empty.innerHTML = '';
    }
  },
};

export default Favorite;
