import CONFIG from '../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="box">
        <h2>${restaurant.name} (⭐️ ${restaurant.rating})</h2>
        <div class="image">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
            <button href="#" aria-label="add to like" class="fas fa-heart"></button>
        </div>
        <div class="content">
            <h3 tabindex="0">Location</h3>
            <p>${restaurant.address}, ${restaurant.city}</p>
            <h3 tabindex="0">Description</h3>
            <p>${restaurant.description}</p>
            <h3 tabindex="0">Drink</h3>
            <div class="icons-container">
                <div tabindex="0" class="icons">
                    <span>${restaurant.drinks}</span>
                </div>
            </div>
            <h3 tabindex="0">Food</h3>
            <div class="icons-container">
                <div tabindex="0" class="icons">
                    <span>${restaurant.foods}</span>
                </div>
            </div>
            <h3 tabindex="0">Categories</h3>
            <div class="icons-container">
                <div tabindex="0" class="icons">
                    <span>${restaurant.categories}</span>
                </div>
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <div class="box">
        <div class="image">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
            <button href="#" aria-label="add to like" class="fas fa-heart"></button>
        </div>
        <div class="content">
            <h4>⭐️ ${restaurants.rating}</h4>
            <h3 tabindex="0"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
            <p>${restaurants.description}</p>
            <button href="#" class="btn">Reserve</button>
            <span>Kota ${restaurants.city}</span>
        </div>
    </div>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
