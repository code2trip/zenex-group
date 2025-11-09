'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import '@/styles/sections/projects-section.scss';
import { getGsapWithScrollTrigger } from '@/lib/gsap';

const projects = [
  {
    title: 'Zenex × NS.Cards Affiliate',
    text: 'Industry leading card solutions for media buying — with the best rates and service on the market.',
    status: 'active',
    domain: 'Explore more',
    url: 'https://zenex-coin.com',
    image: '/images/ns-cards-project-affilate.svg',
  },
  {
    title: 'Zenex × NS.Cards iGaming VIP',
    text: 'First on the market — a card product offering unlimited transactions for casino VIP players and high rollers.',
    status: 'active',
    domain: 'Explore more',
    url: 'https://zenex-coin.com',
    image: '/images/ns-cards-project-igaming-vip.svg',
  },
  {
    title: 'Zenex B2B Fintech Software',
    text: 'Turnkey modular solutions for crypto, financial, payment and card projects - launch your business with us skipping years of development.',
    status: 'active',
    domain: 'Explore more',
    url: 'https://zenex-coin.com',
    image: '/images/ns-cards-project-b2b-software.svg',
  },
  {
    title: 'ZNX Token',
    text: 'Loyalty, rewards, unlocks — one utility token, multiple experiences.',
    status: 'active',
    domain: 'zenex-coin.com',
    url: 'https://zenex-coin.com',
    image: '/images/webp/project-card-img-1.webp',
  },
  {
    title: 'Next-On',
    text: 'All-in-one payment system: cards, crypto — seamless for both ends.',
    status: 'active',
    domain: 'next-on.pro',
    url: 'https://next-on.pro',
    image: '/images/webp/project-card-img-2.webp',
  },
  {
    title: 'NS-Card',
    text: 'Hybrid banking card your Web3 customers will love. Fiat meets crypto, securely.',
    status: 'active',
    domain: 'ns.cards',
    url: 'https://ns.cards',
    image: '/images/webp/project-card-img-3.webp',
  },
  {
    title: 'WR Bet',
    text: 'No-fluff betting on sports, esports, and more. Fast, intuitive, addictive.',
    status: 'active',
    domain: 'wrbet.ke',
    url: 'https://wrbet.ke',
    image: '/images/webp/project-card-img-4.webp',
  },
  {
    title: 'White Rabbit Casino',
    text: 'Slick design, clean experience, real thrill. For smart players.',
    status: 'active',
    domain: 'whiterabbit.casino',
    url: 'https://whiterabbit.casino',
    image: '/images/webp/project-card-img-5.webp',
  },
  {
    title: 'Zenex Group',
    text: 'Central Zenex platform: unified access to all products, services, and features.',
    status: 'soon',
    domain: 'zenex-project.com',
    url: 'https://zenex-project.com',
    image: '/images/webp/project-card-img-6.webp',
  },
  {
    title: 'Axioma',
    text: 'Pro-grade sportsbook backend. Data-first, flexible, and highly scalable.',
    status: 'active',
    domain: 'axioma.bet',
    url: 'https://axioma.bet',
    image: '/images/webp/project-card-img-7.webp',
  },
  {
    title: 'Mi7 EU',
    text: 'A next-gen online casino designed for the European scene. Pure fire, zero bullshit.',
    status: 'soon',
    domain: 'mi7eu.bet',
    url: 'https://mi7.eu',
    image: '/images/webp/project-card-img-8.webp',
  },
];

export default function ProjectsSection() {
  const t = useTranslations('home.projects');
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    const container = swiperRef.current;
    if (!container) return undefined;

    const cards = Array.from(container.querySelectorAll('.project-card'));
    if (!cards.length) return undefined;

    const setEqualHeights = () => {
      let maxHeight = 0;
      cards.forEach((card) => {
        card.style.removeProperty('height');
        const { height } = card.getBoundingClientRect();
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      if (maxHeight > 0) {
        cards.forEach((card) => {
          card.style.height = `${maxHeight}px`;
        });
      }
    };

    setEqualHeights();

    const handleResize = () => {
      setEqualHeights();
    };

    window.addEventListener('resize', handleResize);

    let observer;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        setEqualHeights();
      });
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer?.disconnect();
      cards.forEach((card) => card.style.removeProperty('height'));
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    let tween;

    (async () => {
      if (!swiperRef.current || swiperInstanceRef.current) return;

      const [{ Swiper }, modules, { gsap, ScrollTrigger }] = await Promise.all([
        import('swiper'),
        import('swiper/modules'),
        getGsapWithScrollTrigger(),
      ]);

      if (!mounted || !swiperRef.current) return;

      const { FreeMode, Mousewheel } = modules;

      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        modules: [FreeMode, Mousewheel],
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        mousewheel: true,
      });

      const items = gsap.utils.toArray('.project-card');

      items.forEach((item) => {
        const element = item;
        if (element && element.style) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });

      tween = gsap.fromTo(
        items,
        { opacity: 0, yPercent: 15 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          stagger: 0.3,
          immediateRender: false,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: 'top bottom',
          },
        },
      );
    })();

    return () => {
      mounted = false;
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy();
        swiperInstanceRef.current = null;
      }
      tween?.kill();
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-section__header">
          <h2 className="projects-section__title title">
            <img src="/images/project-icon.svg" alt="" />
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
                    <div className="project-card__footer">
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
