import API_ENDPOINT from '../../scripts/globals/api-endpoint';

class restaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const responseJson = await fetch(API_ENDPOINT.DETAIL(id));
    return responseJson.restaurant;
  }
}

export default restaurantSource;
