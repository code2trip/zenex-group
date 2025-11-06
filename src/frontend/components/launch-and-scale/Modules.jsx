'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Modules() {
  const t = useTranslations('launchAndScale.modules');
  const locale = useLocale();
  
  const modules = [
    {
      tone: 'gold',
      titleKey: 'crypto',
      icon: '/images/crypto.svg',
      bgImage: '/images/b2b_1.png',
    },
    {
      tone: 'green',
      titleKey: 'fiat',
      icon: '/images/fiat.svg',
      bgImage: '/images/b2b_2.png',
    },
    {
      tone: 'teal',
      titleKey: 'card',
      icon: '/images/credit_card3.svg',
      bgImage: '/images/b2b_3.png',
    },
  ];
  return (
    <section className="ls-mod">
      <div className="container">
        <div className="ls-mod__head">
          <span className="ls-badge">
            <img src="/images/puzzle.svg" alt="" />
          </span>
          <h2 className="ls-mod__title">
            {locale === 'ru' ? (
              <>
                <span>{t('title').split(' ')[0]}</span> {t('title').split(' ').slice(1).join(' ')}
              </>
            ) : (
              <>
                {t('title').split(' ').slice(0, -1).join(' ')} <span>{t('title').split(' ').slice(-1)[0]}</span>
              </>
            )}
          </h2>
        </div>

        <div className="ls-mod__grid">
          {modules.map((m, moduleIndex) => {
            const items = t.raw(`${m.titleKey}.items`);
            const itemKeys = ['integration', 'exchange', 'wallets', 'staking', 'tokens'];
            
            return (
              <div key={m.titleKey} className={`ls-mod__card ls-mod__card--${m.tone}`} style={{ backgroundImage: `url(${m.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="ls-mod__card-head">
                  <div className="ls-mod__card-icon">
                    <img src={m.icon} alt="" />
                  </div>
                  <h3 className="ls-mod__card-title">{t(`${m.titleKey}.title`)}</h3>
                </div>
                <ul className="ls-mod__list">
                  {items.map((item, itemIndex) => {
                    const text = item;
                    // Для каждого модуля применяем выделение жирным для ключевых слов согласно скрину
                    if (locale === 'ru') {
                      // РУССКИЙ
                      if (moduleIndex === 0) {
                        // Crypto Module - русский
                        if (itemIndex === 0) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 1) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 2) {
                          // "Кастодиальные кошельки (индивидуальные и мастер)"
                          const parenIndex = text.indexOf('(');
                          if (parenIndex > 0) {
                            return <li key={itemIndex}><strong>{text.substring(0, parenIndex).trim()}</strong> {text.substring(parenIndex)}</li>;
                          }
                          return <li key={itemIndex}><strong>Кастодиальные кошельки</strong></li>;
                        }
                        if (itemIndex === 3) {
                          // "Стейкинг и OTC-desk" - все жирным
                          return <li key={itemIndex}><strong>{text}</strong></li>;
                        }
                        if (itemIndex === 4) {
                          // "Добавление токенов - фиатных, криптовалютных и кастомных"
                          // Находим где заканчивается "Добавление токенов" и делаем его жирным
                          const tokensText = 'Добавление токенов';
                          if (text.startsWith(tokensText)) {
                            const rest = text.substring(tokensText.length);
                            return <li key={itemIndex}><strong>{tokensText}</strong>{rest}</li>;
                          }
                          // Fallback: ищем дефис или тире
                          const dashMatch = text.match(/^(.+?)\s*[-—]\s*(.+)/);
                          if (dashMatch) {
                            return <li key={itemIndex}><strong>{dashMatch[1].trim()}</strong> {dashMatch[2].trim()}</li>;
                          }
                          return <li key={itemIndex}><strong>{tokensText}</strong> {text.substring(tokensText.length)}</li>;
                        }
                      } else if (moduleIndex === 1) {
                        // Fiat Module - русский
                        if (itemIndex === 0) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 1) {
                          // "Пополнение/вывод средств через SWIFT, SEPA, карты, локальные методы"
                          const черезIndex = text.indexOf(' через');
                          if (черезIndex > 0) {
                            return <li key={itemIndex}><strong>{text.substring(0, черезIndex)}</strong>{text.substring(черезIndex)}</li>;
                          }
                          return <li key={itemIndex}><strong>Пополнение/вывод средств</strong> {text.substring(text.indexOf('через'))}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Моментальные переводы между пользователями"
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]} {words[1]}</strong> {words.slice(2).join(' ')}</li>;
                        }
                        if (itemIndex === 3) {
                          // "Интеграция IBANS" - все жирным
                          return <li key={itemIndex}><strong>{text}</strong></li>;
                        }
                        if (itemIndex === 4) {
                          // "On-/Off-ramp функционал" - все жирным
                          return <li key={itemIndex}><strong>{text}</strong></li>;
                        }
                      } else {
                        // Card Module - русский
                        if (itemIndex === 0) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 1) {
                          // "API доступ к заказу и управлением картами" - все жирным
                          return <li key={itemIndex}><strong>{text}</strong></li>;
                        }
                        if (itemIndex === 2) {
                          // "Эмиссия виртуальных и брендированных пластиковых карт с поддержкой Apple/Google Pay"
                          const supportIndex = text.indexOf(' с поддержкой');
                          if (supportIndex > 0) {
                            return <li key={itemIndex}><strong>{text.substring(0, supportIndex)}</strong>{text.substring(supportIndex)}</li>;
                          }
                          return <li key={itemIndex}><strong>{text}</strong></li>;
                        }
                        if (itemIndex === 3) {
                          // "Безлимитные транзакции для пользователей в адрес партнерских сервисов"
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]} {words[1]}</strong> {words.slice(2).join(' ')}</li>;
                        }
                        if (itemIndex === 4) {
                          // "Пополнение карточных балансов крипто и фиатными валютами"
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]} {words[1]} {words[2]}</strong> {words.slice(3).join(' ')}</li>;
                        }
                      }
                    } else {
                      // АНГЛИЙСКИЙ
                      if (moduleIndex === 0) {
                        // Crypto Module - английский
                        if (itemIndex === 0) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 1) {
                          // "Full functionality for exchange operations: ..." - только "operations" жирным
                          const match = text.match(/exchange\s+(\w+)/);
                          if (match) {
                            const before = text.substring(0, match.index);
                            const after = text.substring(match.index + match[0].length);
                            return <li key={itemIndex}>{before}exchange <strong>{match[1]}</strong>{after}</li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 3) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 4) return <li key={itemIndex}>{text}</li>; // Нет жирного
                      } else if (moduleIndex === 1) {
                        // Fiat Module - английский
                        if (itemIndex === 0) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        // В английском переводе itemIndex 1 это "SWIFT, SEPA, cards, local methods"
                        // Но по скрину должно быть "Deposits/withdrawals via..." - проверяю наличие "via"
                        if (itemIndex === 1) {
                          if (text.includes('via')) {
                            // "Deposits/withdrawals via..." - только "Deposits/withdrawals" жирным
                            const match = text.match(/^(.+?)\s+via/);
                            if (match) {
                              return <li key={itemIndex}><strong>{match[1]}</strong> {text.substring(match[0].length - 4)}</li>;
                            }
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Instant peer-to-peer transfers" - только "transfers" жирным
                          if (text.includes('transfers')) {
                            const words = text.split(' ');
                            return <li key={itemIndex}>{words.slice(0, -1).join(' ')} <strong>{words[words.length - 1]}</strong></li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 3) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 4) return <li key={itemIndex}>{text}</li>; // Нет жирного
                      } else {
                        // Card Module - английский
                        if (itemIndex === 0) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 1) {
                          // "API to order & manage cards" - "order & manage cards" жирным
                          if (text.startsWith('API to')) {
                            const match = text.match(/API\s+to\s+(.+)/);
                            if (match) {
                              return <li key={itemIndex}>API to <strong>{match[1]}</strong></li>;
                            }
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Virtual & plastic cards, Apple/Google Pay" - только "Apple/Google Pay" жирным
                          if (text.includes('Apple/Google Pay')) {
                            const match = text.match(/(.+?),\s+(.+)/);
                            if (match) {
                              return <li key={itemIndex}>{match[1]}, <strong>{match[2]}</strong></li>;
                            }
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 3) return <li key={itemIndex}>{text}</li>; // Нет жирного
                        if (itemIndex === 4) return <li key={itemIndex}>{text}</li>; // Нет жирного
                      }
                    }
                    return <li key={itemIndex}>{text}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


