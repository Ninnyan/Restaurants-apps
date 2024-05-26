class menusItem extends HTMLElement {
  constructor() {
    super();

    this._menus = {
      foods: [],
      drinks: [],
    };

    this.foodsContainer = document.querySelector('.foods-list');
    this.drinksContainer = document.querySelector('.drinks-list');
    this.ulFoods = document.createElement('ul');
    this.ulDrinks = document.createElement('ul');

    this.style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  _getMenus(menus) {
    this._menus.foods = menus.foods;
    this._menus.drinks = menus.drinks;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  _makeMenuList(menu) {
    const menusList = document.createElement('menus-list');
    menusList._getMenusList(menu);

    return menusList;
  }

  render() {
    this._menus.foods.forEach((food) => {
      this.ulFoods.append(this._makeMenuList(food));
      this.foodsContainer.append(this.ulFoods);
    });

    this._menus.drinks.forEach((drink) => {
      this.ulDrinks.append(this._makeMenuList(drink));
      this.drinksContainer.append(this.ulDrinks);
    });
  }
}

customElements.define('menus-item', menusItem);
