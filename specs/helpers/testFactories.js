/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-iniator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
