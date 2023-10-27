import restaurantSource from '../../../public/data/dataSource';
import { createRestaurantItemTemplate } from '../../template/createElement';

const listRestaurant = {
  async render() {
    return `
    <div class="menu" id="menu">
        <h1 tabindex="0" class="heading">Explore <span>Restaurant</span></h1>
        <div class="box-container">
            <div id="restaurants" class="restaurants"></div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default listRestaurant;
