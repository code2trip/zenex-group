import gsap from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function common() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const lockedVh =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--locked-vh',
      ),
    ) || window.innerHeight;

  function lockInitialVh() {
    document.documentElement.style.setProperty('--locked-vh', `${lockedVh}px`);
  }

  if (isMobile) {
    lockInitialVh();
  }
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  const stopScroll = document.querySelectorAll('[data-stop-scroll]');
  const startScroll = document.querySelectorAll('[data-start-scroll]');

  stopScroll.forEach((item) => {
    item.addEventListener('click', () => {
      lenis.stop();
    });
  });

  startScroll.forEach((item) => {
    item.addEventListener('click', () => {
      lenis.start();
    });
  });

  // anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  const onlyHashLinks = Array.from(anchorLinks).filter((link) => {
    const href = link.getAttribute('href');
    return href.startsWith('#') && href.length > 1 && !href.includes('/');
  });

  // Пример: назначим им поведение
  onlyHashLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.share-button').forEach((button) => {
    button.addEventListener('click', () => {
      const urlToCopy = button.getAttribute('data-copy');
      if (!urlToCopy) return;

      navigator.clipboard.writeText(urlToCopy).then(() => {
        const defaultState = button.querySelector('.share-button__default');
        const copiedState = button.querySelector('.share-button__copied');

        defaultState.style.display = 'none';
        copiedState.style.display = 'inline-flex';

        setTimeout(() => {
          defaultState.style.display = 'inline-flex';
          copiedState.style.display = 'none';
        }, 3000);
      });
    });
  });

  // menu
  const menu = document.querySelector('.menu');
  const headerMenuButton = document.querySelector('.header__menu-button');
  const header = document.querySelector('.header');
  const overlay = document.querySelector('.overlay');
  const menuLinks = document.querySelectorAll('.menu a');
  const menuInnerHeight = document.querySelector('.menu__inner').offsetHeight;

  function openMenu() {
    headerMenuButton.classList.add('active');
    header.classList.add('active');
    overlay.classList.add('active');
    menu.classList.add('active');
    gsap.to(menu, {
      duration: 0.5,
      ease: 'power2.out',
      height: menuInnerHeight,
    });
  }

  function closeMenu() {
    headerMenuButton.classList.remove('active');
    header.classList.remove('active');
    overlay.classList.remove('active');
    menu.classList.remove('active');
    gsap.to(menu, {
      duration: 0.5,
      ease: 'power2.out',
      height: 0,
    });
  }

  headerMenuButton.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', () => {
    closeMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}
