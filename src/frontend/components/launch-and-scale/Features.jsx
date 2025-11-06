'use client';

const features = [
  {
    title: 'Инфраструктура',
    text: 'CI/CD, мониторинг, логирование и авто‑масштабирование.',
    icon: '/assets/icon-zenex.svg',
  },
  {
    title: 'Команда',
    text: 'Подключаем продуктовых, дизайн и инженерных специалистов.',
    icon: '/assets/vip-speed.svg',
  },
  {
    title: 'Запуск',
    text: 'Готовим MVP, выкатываем, собираем метрики и улучшаем.',
    icon: '/assets/vip-credit_card_gear.svg',
  },
];

export default function Features() {
  return (
    <section className="ls-features">
      <div className="container">
        <ul className="ls-features__list">
          {features.map((f, i) => (
            <li className="ls-features__item" key={i}>
              {f.icon && <img className="ls-features__icon" src={f.icon} alt="" loading="lazy" />}
              <h3 className="ls-features__title">{f.title}</h3>
              <p className="ls-features__text">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


