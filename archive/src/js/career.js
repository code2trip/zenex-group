import '../styles/career.scss';
import { careerHero } from './modules/career-hero';
import { careerValues } from './modules/career-values';
import { careerWorks } from './modules/career-work';
import common from './modules/common';
import { initForm } from './modules/form';
import simpleLoader from './modules/loader';

common();
simpleLoader();
initForm();
careerHero();
careerValues();
careerWorks();

const sections = [];

window.addEventListener('onLoaderLoaded', () => {
  sections.forEach((section) => section());
});
