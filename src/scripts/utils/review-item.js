class reviewItem extends HTMLElement {
  constructor() {
    super();

    this.reviews = [];
  }

  connectedCallback() {
    this.render();
  }

  _getReviews(reviews) {
    this.reviews = reviews;

    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  _makeReviewList(review) {
    const reviewList = document.createElement('review-list');
    reviewList._getReviewList(review);

    return reviewList;
  }

  render() {
    this.innerHTML = '';

    this.reviews.forEach((review) => {
      this.append(this._makeReviewList(review));
    });
  }
}

customElements.define('review-item', reviewItem);
