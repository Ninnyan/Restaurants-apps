let prevScrollpos = window.pageYOffset;
// eslint-disable-next-line func-names
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.container-header').style.top = '0';
  } else {
    document.querySelector('.container-header').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};
console.log(document.querySelector('.container-header'));
