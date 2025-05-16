import '../styles/news.scss';
import common from './modules/common';
import simpleLoader from './modules/loader';

common();
simpleLoader();

const sections = [];

window.addEventListener('onLoaderLoaded', () => {
  sections.forEach((section) => section());
});
