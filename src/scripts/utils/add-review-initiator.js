import RestaurantSource from '../data/restaurant-source';
// eslint-disable-next-line import/no-cycle

const AddReviewInitiator = {
  add({
    buttonAdd, id, name, review, reviewer, loadRak,
  }) {
    buttonAdd.addEventListener('click', (event) => {
      // eslint-disable-next-line no-param-reassign
      loadRak.style.display = 'flex';
      reviewer.removeAttribute('hidden');
      this._toggleAddReview({
        event, id, name, review, reviewer, loadRak,
      });
    });
  },

  // eslint-disable-next-line consistent-return
  async _toggleAddReview({
    event, id, name, review, reviewer, loadRak,
  }) {
    event.stopPropagation();
    const data = {
      id,
      name: name.value,
      review: review.value,
    };

    if (data.name === '' || data.review === '') {
      // eslint-disable-next-line no-alert
      alert('Data Kosong');
      // eslint-disable-next-line no-param-reassign
      loadRak.style.display = 'none';
    } else {
      this._reloadData(data, reviewer, loadRak);
    }
  },

  async _reloadData(data, reviewer, loadRak) {
    const data2 = await RestaurantSource.createReview(data);
    const reviewItem = document.querySelector('review-item');
    reviewItem._getReviews(data2[0].customerReviews);
    reviewer.setAttribute('hidden', '');
    if (reviewer.hasAttribute('hidden')) {
      // eslint-disable-next-line no-param-reassign
      setTimeout(async () => {
        reviewer.removeAttribute('hidden');
        // eslint-disable-next-line no-param-reassign
        loadRak.style.display = 'none';
      }, data2.pop());
    } else {
      reviewer.setAttribute('hidden', '');
    }
  },
};

export default AddReviewInitiator;
