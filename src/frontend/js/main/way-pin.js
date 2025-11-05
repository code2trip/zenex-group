import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function wayPin() {
  ScrollTrigger.create({
    trigger: '.way-section',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.way-section__pin',
    pinSpacing: false,
  });
}
