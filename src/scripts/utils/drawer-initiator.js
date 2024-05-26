const DrawerInitiator = {
  init({
    button, drawer, body, header,
  }) {
    let prevScrollpos = window.pageYOffset;
    // eslint-disable-next-line func-names
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // eslint-disable-next-line no-param-reassign
        header.style.top = '0';
      } else {
        // eslint-disable-next-line no-param-reassign
        header.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    body.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
