import CONFIG from '../globals/config';

class logList extends HTMLElement {
  constructor() {
    super();

    this._logList = {
      id: 0,
      name: 'NEED_TITLE',
      description: 'NEED_BODY_VALUE',
      pictureId: 'NEED_PICTUREID',
      city: 'CITY',
      rating: 0,
    };
  }

  connectedCallback() {
    this.render();
  }

  setLog(value) {
    this._logList.id = value.id;
    this._logList.name = value.name;
    this._logList.description = value.description;
    this._logList.pictureId = value.pictureId;
    this._logList.city = value.city;
    this._logList.rating = value.rating;

    this.render();
  }

  render() {
    this.innerHTML = `
          <a href="#/detail/${this._logList.id}" aria-label="Detail Restaurant ${this._logList.name}">
            <div class="container-content">
              <div class="hero-content lazyload" style="background-image: url(${CONFIG.BASE_IMAGE_URL + this._logList.pictureId});" alt="">
                <span>-${this._logList.city} City-</span>
              </div>
              <div class="container-bawah">
                <span class="rating"  style="--rating: ${this._logList.rating};" aria-label="Rating dari Restoran ini adalah ${this._logList.rating} dari 5."> / ${this._logList.rating}</span>
                <span class="judul-content restaurant__title" aria-label="Nama Restorant adalah ${this._logList.name}">"${this._logList.name}"</span>
              </span>
            </div>
          </a>

        `;
  }
}

customElements.define('log-list', logList);
