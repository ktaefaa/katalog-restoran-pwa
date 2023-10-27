import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../../public/data/dataSource';
import { createRestaurantDetailTemplate } from '../../template/createElement';

const Detail = {
  async render() {
    return `
      <div class="menu" id="menu">
        <h1 tabindex="0" class="heading">Detail <span>Restaurant</span></h1>
        <div class="box-container">
        <div id="restaurant" class="restaurant"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
