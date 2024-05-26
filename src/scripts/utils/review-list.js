class reviewList extends HTMLElement {
  constructor() {
    super();

    this.review = {
      name: 'REVIEWER',
      review: 'REVIEW',
      date: 'REVIEW_DATE',
    };
  }

  connectedCallback() {
    this.render();
  }

  _getReviewList(review) {
    this.review.name = review.name;
    this.review.review = review.review;
    this.review.date = review.date;
  }

  render() {
    this.innerHTML = `
        <div class="review-container">
            <div class="reviewer">
                <h4 tabindex="0">${this.review.name}</h4>
                <p class="date-review" tabindex="0">${this.review.date}</p>
            </div>
            <p class="review" tabindex="0">${this.review.review}</p>
        </div>
        `;
  }
}

customElements.define('review-list', reviewList);
