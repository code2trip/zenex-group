'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper } from 'swiper';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import '@/styles/sections/projects-section.scss';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'ZNX Token',
    text: 'Loyalty, rewards, unlocks — one utility token, multiple experiences.',
    status: 'active',
    domain: 'zenex-coin.com',
    url: 'https://zenex-coin.com',
    image: '/src/assets/images/webp/project-card-img-1.webp',
  },
  {
    title: 'Next-On',
    text: 'All-in-one payment system: cards, crypto — seamless for both ends.',
    status: 'active',
    domain: 'next-on.pro',
    url: 'https://next-on.pro',
    image: '/src/assets/images/webp/project-card-img-2.webp',
  },
  {
    title: 'NS-Card',
    text: 'Hybrid banking card your Web3 customers will love. Fiat meets crypto, securely.',
    status: 'active',
    domain: 'ns.cards',
    url: 'https://ns.cards',
    image: '/src/assets/images/webp/project-card-img-3.webp',
  },
  {
    title: 'WR Bet',
    text: 'No-fluff betting on sports, esports, and more. Fast, intuitive, addictive.',
    status: 'active',
    domain: 'wrbet.ke',
    url: 'https://wrbet.ke',
    image: '/src/assets/images/webp/project-card-img-4.webp',
  },
  {
    title: 'White Rabbit Casino',
    text: 'Slick design, clean experience, real thrill. For smart players.',
    status: 'active',
    domain: 'whiterabbit.casino',
    url: 'https://whiterabbit.casino',
    image: '/src/assets/images/webp/project-card-img-5.webp',
  },
  {
    title: 'Zenex Group',
    text: 'Central Zenex platform: unified access to all products, services, and features.',
    status: 'soon',
    domain: 'zenex-project.com',
    url: 'https://zenex-project.com',
    image: '/src/assets/images/webp/project-card-img-6.webp',
  },
  {
    title: 'Axioma',
    text: 'Pro-grade sportsbook backend. Data-first, flexible, and highly scalable.',
    status: 'active',
    domain: 'axioma.bet',
    url: 'https://axioma.bet',
    image: '/src/assets/images/webp/project-card-img-7.webp',
  },
  {
    title: 'Mi7 EU',
    text: 'A next-gen online casino designed for the European scene. Pure fire, zero bullshit.',
    status: 'soon',
    domain: 'mi7eu.bet',
    url: 'https://mi7.eu',
    image: '/src/assets/images/webp/project-card-img-8.webp',
  },
];

export default function ProjectsSection() {
  const t = useTranslations('home.projects');
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && !swiperInstanceRef.current) {
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        modules: [FreeMode, Mousewheel],
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        mousewheel: true,
      });
    }

    const items = document.querySelectorAll('.project-card');
    gsap.from(items, {
      scrollTrigger: {
        trigger: items,
        start: 'top 75%',
      },
      duration: 1,
      opacity: 0,
      yPercent: 15,
      stagger: 0.4,
    });

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy();
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-section__header">
          <h2 className="projects-section__title title">
            <img src="/src/assets/images/project-icon.svg" alt="" />
            {t('title')}
          </h2>
          <p className="projects-section__text">{t('text')}</p>
          <span className="projects-section__label label">{t('label')}</span>
        </div>

        <div className="swiper projects-swiper" ref={swiperRef} data-lenis-prevent>
          <div className="swiper-wrapper">
            {projects.map((project, index) => (
              <div key={index} className="swiper-slide">
                <a href={project.url} className="project-card" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt="" className="project-card__img" />
                  <div className="project-card__inner">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__text">{project.text}</p>
                    <span className={`project-card__status ${project.status}`}>
                      {project.status === 'active' ? t('active') : t('soon')}
                    </span>
                    <div className="project-card__row">
                      <span className="project-card__domain">{project.domain}</span>
                      <span className="project-card__arrow">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 0.19873C5.38331 0.19873 0 5.58204 0 12.1987C0 18.8154 5.38331 24.1987 12 24.1987C18.6167 24.1987 24 18.8154 24 12.1987C24 5.58204 18.6167 0.19873 12 0.19873ZM12 22.6987C6.21019 22.6987 1.5 17.9885 1.5 12.1987C1.5 6.40892 6.21019 1.69873 12 1.69873C17.7898 1.69873 22.5 6.40892 22.5 12.1987C22.5 17.9885 17.7898 22.6987 12 22.6987ZM17.0303 11.6685C17.3233 11.9615 17.3233 12.4361 17.0303 12.729L13.2803 16.479C13.1338 16.6254 12.9418 16.6987 12.75 16.6987C12.5582 16.6987 12.3662 16.6254 12.2197 16.479C11.9267 16.1859 11.9267 15.7114 12.2197 15.4185L14.6895 12.9487H7.5C7.08581 12.9487 6.75 12.6133 6.75 12.1987C6.75 11.7842 7.08581 11.4487 7.5 11.4487H14.6895L12.2197 8.97898C11.9267 8.68592 11.9267 8.21136 12.2197 7.91848C12.5128 7.62561 12.9874 7.62542 13.2803 7.91848L17.0303 11.6685Z"
                            fill="#282828"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
