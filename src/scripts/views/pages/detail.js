import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/no-cycle
import AddReviewInitiator from '../../utils/add-review-initiator';
import AnimationAnime from '../../utils/anime-initiator';
import favoriteItem from '../../utils/favorite-item';
import ReviewInitiator from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
          <detail-item></detail-item>
        `;
  },

  async afterRender() {
    AnimationAnime.loadDetail(document.querySelector('detail-item'));
    const urlTime = UrlParser.parseActiveUrlWithoutCombiner();
    const timeToGet = await RestaurantSource.detailRestaurant(urlTime.id);
    setTimeout(async () => {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurants = await RestaurantSource.detailRestaurant(url.id);
      const getTime = restaurants.pop();
      const detailItem = document.querySelector('detail-item');
      detailItem._getDetailRestaurant(restaurants[0].restaurant);
      const menusItem = document.querySelector('menus-item');
      menusItem._getMenus(restaurants[0].restaurant.menus);
      const reviewItem = document.querySelector('review-item');
      reviewItem._getReviews(restaurants[0].restaurant.customerReviews);

      ReviewInitiator.init({
        button: document.querySelector('.review-button'),
        loadRak: document.querySelector('loading-all'),
        content: document.querySelector('.review-customer'),
        reviewer: document.querySelector('review-item'),
        getTime,
      });

      favoriteItem.init({
        starButton: document.querySelector('.star-container'),
        restaurant: {
          id: restaurants[0].restaurant.id,
          name: restaurants[0].restaurant.name,
          description: restaurants[0].restaurant.description,
          city: restaurants[0].restaurant.city,
          address: restaurants[0].restaurant.address,
          pictureId: restaurants[0].restaurant.pictureId,
          categories: restaurants[0].restaurant.categories,
          menus: restaurants[0].restaurant.menus,
          rating: restaurants[0].restaurant.rating,
          customerReviews: restaurants[0].restaurant.customerReviews,
        },
      });

      const buttonAdd = document.querySelector('.add-review');
      const { id } = url;
      const name = document.querySelector('.name');
      const review = document.querySelector('.input-user');

      AddReviewInitiator.add({
        buttonAdd,
        id,
        name,
        review,
        reviewer: document.querySelector('review-item'),
        getTime,
        loadRak: document.querySelector('loading-all'),
      });
    }, 0);
  },
};

export default Detail;
