import anime from 'animejs';

const AnimationAnime = {
  loadDetail(data) {
    anime({
      // eslint-disable-next-line max-len
      targets: [this._mainTitle(data), this._detailImage(data), this._tbody(data), this._starButton(data), this._reviewButton(data)],
      direction: 'alternate',
      backgroundColor: ['#EFFDED', '#CBCFCB'],
      color: ['#EFFDED', '#CBCFCB'],
      borderColor: ['#EFFDED', '#CBCFCB'],
      loop: true,
      easing: 'easeInOutSine',
    });
  },

  _tbody(data) {
    const trs = data.childNodes[3].childNodes[3].childNodes[1].childNodes;
    return [...trs].sort().splice(0, 14).map((tr) => tr.childNodes[1]);
  },

  _mainTitle(data) {
    return data.childNodes[1];
  },

  _detailImage(data) {
    return data.childNodes[3].childNodes[1];
  },

  _starButton(data) {
    return data.childNodes[3].childNodes[1].childNodes[1];
  },

  _reviewButton(data) {
    return data.childNodes[3].childNodes[5];
  },

  loadHome(data) {
    console.log(data.childNodes);
    anime({
      // eslint-disable-next-line max-len
      targets: [...data],
      direction: 'alternate',
      backgroundColor: ['#EFFDED', '#CBCFCB'],
      color: ['#EFFDED', '#CBCFCB'],
      borderColor: ['#EFFDED', '#CBCFCB'],
      loop: true,
      easing: 'easeInOutSine',
    });
  },
};

export default AnimationAnime;
