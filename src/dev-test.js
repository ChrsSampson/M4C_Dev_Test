/* global $ */

import './sass/style.scss';
import App from './app.js';

const init = async () => {
  const app = new App();
  app.showContent();
  app.showVideos();
};

$(document).ready(() => {
  init();
});
