import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-iniator';

const Detail = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="favoriteButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
