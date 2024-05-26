import anime from 'animejs';
import CONFIG from '../globals/config';

class detailItem extends HTMLElement {
  constructor() {
    super();

    this.restaurant = {};
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
    // this._getFoodsItem();
  }

  _updateStyle() {
    this._style.textContent = `
    .main-detail {
        margin: auto;
        background-color: rgb(84, 163, 112);
        border-radius: 200px;
        text-align: center;
        margin-block: 10px;
      }
    
    .detail-container {
        margin: auto;
        width: 100%;
    }
    
    .detail-container .image-restaurant {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: self-end;
    }
    
    .container-main-review {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        display-items: center;
    }

    .detail-restaurant {
        margin: auto;
        display: flex;
        text-align: center;
        justify-content: center;
        alighn-item: center;
        max-width: 100%;
        margin-block: 10px;
        tbody {
            width: 100%;
        }
        tr {
          display: flex;
          margin: 20px;
          width: 100%;
          margin: auto;
        }    
    }
    
    th, td {
        padding: 7px;
        width: 100%;
        margin: auto;
    }
    
    th {
        background-color: rgb(84, 163, 112);
        padding: 10px;
    }
    
    td {
        background-color: rgb(163, 205, 190);
        padding: 10px;
    }
    
    .foods, .deskripsi {
        text-indent: 30px;
        text-align: justify;
        letter-spacing: 1px;
    }
    
    .deskripsi td {
        padding-inline: 35px;
    }

    .review-button {
        border: 2px dashed rgb(25, 107, 70);
        width: 100%;
        height: 50px;
        background-color: rgb(227, 251, 237);
        font-weight: bold;
        margin-block: 20px;
        cursor: pointer;
    }

    .review-button:hover {
        border: 2px dashed rgb(255, 255, 255);
        background-color: black;
        color: white;
    }
    
    i.star {
        font-size: 30px;
        margin-right: 10px;
        margin-bottom: 5px;
        border-radius: 50%;
        display: grid;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 252);
        background-color: gold;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
    
    i.star:hover {
        color: rgb(255, 255, 0);
        background-color: rgb(255, 255, 255);
    
    }
    `;
  }

  _getDetailRestaurant(restaurant) {
    if (restaurant === undefined) {
      // eslint-disable-next-line no-alert
      alert('Request Timeout: Data Tidak Dapat Diperoleh!');
    } else {
      this.restaurant = restaurant;
    }
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  _animation(data) {
    anime({
      targets: data,
      direction: 'alternate',
      backgroundColor: ['#FFF', '#F22'],
      color: ['#FFF', '#000'],
      loop: true,
      easing: 'easeInOutSine',
    });
  }

  render() {
    this._updateStyle();
    this.innerHTML = '';
    this.innerHTML = `
        <div class="main-title main-detail" tabindex="0">
            <h3>Detail Restaurant</h3>
        </div>
        <div class="detail-container">
            <div class="image-restaurant star-container" style="background-image: url(${CONFIG.BASE_IMAGE_URL + this.restaurant.pictureId});">
                <i aria-label="unfavorite this restaurant" class="fa-regular fa-star star"></i>
            </div>
            <table class="detail-restaurant">
                <tr tabindex="0">
                    <th>Restaurant Name</th>
                </tr>
                <tr tabindex="0">
                    <td>${this.restaurant.name}</td>
                </tr>
                <tr tabindex="0">
                    <th>Rating</th>
                </tr>
                <tr tabindex="0">
                    <td>${this.restaurant.rating}</td>
                </tr>
                <tr tabindex="0">
                    <th>Description</th>
                </tr>
                <tr class="deskripsi" tabindex="0">
                    <td>${this.restaurant.description}</td>
                </tr>
                <tr tabindex="0">
                    <th>City</th>
                </tr>
                <tr tabindex="0">
                    <td>${this.restaurant.city}</td>
                </tr>
                <tr tabindex="0">
                    <th>Address</th>
                </tr>
                <tr tabindex="0">
                    <td>${this.restaurant.address}</td>
                </tr>
                <tr tabindex="0">
                    <th>Foods Menu</th>
                </tr>
                <tr class="foods" tabindex="0">
                    <td class="list">     
                        <menus-item class="foods-list"></menus-item>
                    </td>
                </tr>
                <tr tabindex="0">
                    <th>Drinks Menu</th>
                </tr>
                <tr class="foods" tabindex="0">
                    <td class="list">     
                        <menus-item class="drinks-list"></menus-item>
                    </td>
                </tr>
            </table>
            <button class="review-button">Review Customer</button>
            <div class="review-customer" hidden>
            <div>
                <div class="judul-review reviewer" tabindex="0">
                    <h3>Want To Review ?</h3>
                </div>
                <form action="#"  class="form-review">
                    <label for="name-reviewer" class="input-review" tabindex="0">Name:</label>
                    <input type="text" id="name-reviewer" class="input-review name" maxlength="10" placeholder="*Max. Char 10" required>
                    <label for="review-reviewer" class="input-review" tabindex="0">Review:</label>
                    <textarea type="text" id="review-reviewer" class="input-review input-user" maxlength="200" required placeholder="*Max. Char 200"></textarea>
                    <button type="button" class="add-review input-review">Add Review</button>
                </form>
            </div>
            <div  class="container-main-review">
                <loading-all class="review-load"></loading-all>
            </div>
                <review-item></review-item>
            </div>
        </div>
        
        `;

    this.append(this._style);
  }
}

customElements.define('detail-item', detailItem);
