// eslint-disable-next-line import/extensions
import anime from 'animejs/lib/anime.es.js';

class loadingAll extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
    this.div = document.createElement('div');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        .loader-all {
            width: 50px;
            height: 50px;
            background-color: #64FFDB;
            border-radius: 50%;
          
        }
        `;
  }

  loadingAnimation() {
    anime({
      targets: this.div,
      keyframes: [{ translateX: 100 }, { translateX: -100 }],
      duration: 2000,
      easing: 'easeInOutCubic',
      direction: 'alternate',
      loop: true,
      borderRadius: ['50%', '0%'],
      rotate: [-20, 50],
    });
  }

  render() {
    this.updateStyle();
    this.loadingAnimation();
    this.div.classList.add('loader-all');
    this.div.setAttribute('data-x', 200);

    this.append(this._style, this.div);
  }
}

customElements.define('loading-all', loadingAll);
