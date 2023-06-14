import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__image" class='lazyload'
      data-src="${CONFIG.BASE_MEDIUM_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" tabindex='0'>
    </div>
    <div class="restaurant-item__content">
      <div class="restaurant-item__content__header"> 
        <h3 class="restaurant-item__header__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p class="restaurant-item__header__rating"><i class="fa-solid fa-star"></i>${restaurant.rating}</p>
      </div>
      <p class="restaurant-item__content__city">${restaurant.city}</p>
      <p class="restaurant-item__content__description">${restaurant.description}</p>
    </div>
  </div>`;
const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__image" class="lazyload" data-src="${CONFIG.BASE_LARGE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__header">
    <h2>${restaurant.name}</h2>
  </div>

  <div class="restaurant__info">
    <h4>⭐Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Location</h4>
    <p>${restaurant.address}, ${restaurant.city}.</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Foods</h4>
    <ul>
      ${restaurant.menus.foods.map(((food) => `<li>${food.name}</li>`
  )).join('')}
    </ul>
    <h4>Drinks</h4>
    <ul>
      ${restaurant.menus.drinks.map(((drink) => `<li>${drink.name}</li>`
  )).join('')}
    </ul>
  </div>
  
  <h4 class="restaurant__review__title">Customer Reviews</h4>
  <div class="restaurant__review">
  ${restaurant.customerReviews.slice(0, 6).map(((review) => `
    <div class="review-item">
    <i class="fa-solid fa-circle-user"></i>
        <div class="review-item__header">
          <p id="reviewerName">${review.name}</p>
          <p  id="reviewDate">${review.date}</p>
        </div>
    <div class="review-item__content">
          <p>${review.review}</p>
    </div>
  </div>
  `
  )).join('')}
  </div>
  `;
const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>   
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
