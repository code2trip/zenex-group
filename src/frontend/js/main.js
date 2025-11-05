import '../styles/index.scss';
import common from './modules/common';
import { heroSection } from './modules/hero-section';
import simpleLoader from './modules/loader';
import { mapSection } from './modules/map-section';
import { numbersSection } from './modules/numbers-section';
import { projectsSection } from './modules/projects-section';
import { projectsSwiper } from './modules/projects-swiper';
import { whySection } from './modules/why-section';

common();
simpleLoader();
numbersSection();
projectsSection();
whySection();
projectsSwiper();
mapSection();

const sections = [heroSection];

window.addEventListener('onLoaderLoaded', () => {
  sections.forEach((section) => section());
});
