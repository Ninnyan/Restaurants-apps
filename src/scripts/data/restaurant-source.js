import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  // eslint-disable-next-line class-methods-use-this

  // eslint-disable-next-line consistent-return
  static async home() {
    const startTime = performance.now();
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJSON = await response.json();
      const endTime = performance.now();
      // eslint-disable-next-line max-len
      const data = [...responseJSON.restaurants, Math.round(endTime - startTime)];
      if (responseJSON.error) {
        throw new Error(responseJSON.message);
      } else {
        return data;
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  static async detailRestaurant(id) {
    const startTime = performance.now();
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJSON = await response.json();
      const endTime = performance.now();
      // eslint-disable-next-line max-len
      const data = [responseJSON, Math.round(endTime - startTime)];
      if (responseJSON.error) {
        throw new Error(responseJSON.message);
      } else {
        return data;
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  static async createReview(data) {
    const startTime = performance.now();
    try {
      const option = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.REVIEW, option);
      const responseJSON = await response.json();
      // eslint-disable-next-line no-shadow
      const endTime = performance.now();
      // eslint-disable-next-line max-len, no-shadow
      const dataTime = [responseJSON, Math.round(endTime - startTime)];
      if (responseJSON.error) {
        throw new Error(responseJSON.message);
      } else {
        return dataTime;
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  }
}

export default RestaurantSource;
