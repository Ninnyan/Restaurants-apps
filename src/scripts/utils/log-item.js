import anime from 'animejs/lib/anime.es';

class logItem extends HTMLElement {
  constructor() {
    super();

    this._log = [];

    this._style = document.createElement('style');
    this._unarchive = document.querySelector('#unarchive');

    this._divUnarchive = document.createElement('div');
    this._divArchive = document.createElement('div');
    this.notFound = document.querySelector('.restaurant-item__not__found');
  }

  connectedCallback() {
    this.render();
  }

  _getContainer(container) {
    // eslint-disable-next-line no-param-reassign
    container.innerHTML = '';
    this.render();
  }

  setLogList(value) {
    if (value === undefined) {
      // eslint-disable-next-line no-alert
      alert('Request Timeout: Data Tidak Dapat Diperoleh!');
    } else {
      this._log = value;
    }

    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  makeLog(data) {
    const logList = document.createElement('log-list');
    logList.setLog(data);

    return logList;
  }

  // eslint-disable-next-line class-methods-use-this
  animation(el) {
    anime({
      targets: el,
      width: [0, 300],
      loop: false,
      // eslint-disable-next-line no-unused-vars
      delay(_el, i, _l) {
        return i * 50;
      },
    });
  }

  render() {
    if (this._log.length > 0) {
      this.innerHTML = '';
      this.notFound.innerHTML = '';
      this._log.forEach((data) => {
        this._unarchive.append(this.makeLog(data));
        this.animation(this._unarchive.childNodes);
      });
    } else {
      this.notFound.innerHTML = 'Failed To Get Data Restaurant';
    }
  }
}

customElements.define('log-item', logItem);
