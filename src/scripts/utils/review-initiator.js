const ReviewInitiator = {
  init({
    button, loadRak, content, reviewer, getTime,
  }) {
    // eslint-disable-next-line no-param-reassign
    reviewer.setAttribute('hidden', '');
    button.addEventListener('click', (event) => {
      // eslint-disable-next-line no-param-reassign
      loadRak.style.display = 'flex';
      this._toggleReview(event, loadRak, content, reviewer, getTime);
    });
  },

  _toggleReview(event, loadRak, content, reviewer, getTime) {
    event.stopPropagation();
    if (content.hasAttribute('hidden')) {
      content.removeAttribute('hidden');
      setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        loadRak.style.display = 'none';
        // eslint-disable-next-line no-param-reassign
        reviewer.removeAttribute('hidden');
      }, getTime);
    } else {
      content.setAttribute('hidden', '');
      // eslint-disable-next-line no-param-reassign
      reviewer.setAttribute('hidden', '');
    }
  },
};

export default ReviewInitiator;
