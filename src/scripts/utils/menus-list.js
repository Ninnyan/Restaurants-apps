class menusList extends HTMLElement {
  constructor() {
    super();

    this.menus = {
      name: 'MENU_NAME',
    };
  }

  connectedCallback() {
    this.render();
  }

  _getMenusList(menus) {
    this.menus.name = menus.name;

    this.render();
  }

  render() {
    this.innerHTML = `
            <li>${this.menus.name}</li>
    `;
  }
}

customElements.define('menus-list', menusList);
