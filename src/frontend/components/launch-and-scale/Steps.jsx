'use client';

const steps = [
  { n: '01', t: 'Аудит и план', d: 'Собираем требования, формируем дорожную карту запуска.' },
  { n: '02', t: 'MVP', d: 'Собираем ядро продукта, настраиваем сборку и мониторинг.' },
  { n: '03', t: 'Масштабирование', d: 'Обратная связь, оптимизация, найм и рост фич.' },
];

export default function Steps() {
  return (
    <section className="ls-steps">
      <div className="container">
        <ol className="ls-steps__list">
          {steps.map((s) => (
            <li className="ls-steps__item" key={s.n}>
              <span className="ls-steps__num">{s.n}</span>
              <h4 className="ls-steps__title">{s.t}</h4>
              <p className="ls-steps__desc">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


