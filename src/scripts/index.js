import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import '../scss/responsive.scss';
import './utils/log-item';
import './utils/log-list';
import './utils/menus-item';
import './utils/menus-list';
import './utils/detail-item';
import './utils/review-item';
import './utils/review-list';
import './utils/favorite-item';
import './utils/loading-all';
import App from './views/app';
import swRegister from './utils/sw.register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const button = document.querySelector('.bars-navbar');
const content = document.querySelector('main');
const drawer = document.querySelector('.navbar-container');
const header = document.querySelector('.container-header');
const body = document.querySelector('body');
const skipMain = document.querySelector('.skip-main');
const main = document.querySelector('main');

const app = new App({
  button,
  drawer,
  content,
  body,
  header,
  skipMain,
  main,
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
