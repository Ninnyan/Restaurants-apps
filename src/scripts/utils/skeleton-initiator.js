const templateSkeletonContainer = (count) => {
  let template = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    template += `
        <div class="container-content">
          <div class="hero-content lazyload skeleton" style="background-image: url();" alt="">
            <span class="skeleton">-Place City-</span>
          </div>
          <div class="container-bawah">
            <span class="skeleton" aria-label="Rating dari Restoran ini adalah 5 dari 5."> / 5 </span>
            <span class="judul-content restaurant__title skeleton" aria-label="Nama Restorant adalah Restaurant">"Nama Restaurant"</span>
          </span>
        </div>
        </div>
        `;
  }
  return template;
};

const templateSkeletonDetailContainer = (count) => ` 
<div class="main-title main-detail skeleton" tabindex="0">
<h3>Detail Restaurant</h3>
</div>
<div class="detail-container">
  <div class="image-restaurant star-container skeleton" style="background-image: url(${CONFIG.BASE_IMAGE_URL + this.restaurant.pictureId});">
      <i aria-label="unfavorite this restaurant" class="fa-regular fa-star star"></i>
  </div>
  <table class="detail-restaurant">
      <tr tabindex="0">
          <th class="skeleton">Restaurant Name</th>
      </tr>
      <tr tabindex="0">
          <td class="skeleton">${this.restaurant.name}</td>
      </tr>
      <tr tabindex="0">
          <th class="skeleton">Rating</th>
      </tr>
      <tr tabindex="0">
          <td class="skeleton">${this.restaurant.rating}</td>
      </tr>
      <tr tabindex="0">
          <th class="skeleton">Description</th>
      </tr>
      <tr class="deskripsi" tabindex="0">
          <td class="skeleton">${this.restaurant.description}</td>
      </tr>
      <tr tabindex="0">
          <th class="skeleton">City</th>
      </tr>
      <tr tabindex="0">
          <td class="skeleton">${this.restaurant.city}</td>
      </tr>
      <tr tabindex="0">
          <th class="skeleton">Address</th>
      </tr>
      <tr tabindex="0">
          <td class="skeleton">${this.restaurant.address}</td>
      </tr>
      <tr tabindex="0">
          <th class="skeleton">Foods Menu</th>
      </tr>
      <tr class="foods" tabindex="0">
          <td class="list skeleton">     
              <menus-item class="foods-list"></menus-item>
          </td>
      </tr>
      <tr tabindex="0">
          <th class="skeleton">Drinks Menu</th>
      </tr>
      <tr class="foods" tabindex="0">
          <td class="list skeleton">     
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
</div>`;

// eslint-disable-next-line import/prefer-default-export
export { templateSkeletonContainer };
