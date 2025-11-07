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
                        if (itemIndex === 0) {
                          // "Интеграции с биржами..." - только "Интеграции" жирным
                          return <li key={itemIndex}><strong>Интеграции</strong> {text.substring(text.indexOf(' ') + 1)}</li>;
                        }
                        if (itemIndex === 1) {
                          // "Полный функционал для обменных операций: ..." - только "обменных операций" жирным
                          const match = text.match(/для\s+(.+?):/);
                          if (match) {
                            const before = text.substring(0, text.indexOf('для') + 4);
                            const after = text.substring(text.indexOf(':'));
                            return <li key={itemIndex}>{before} <strong>{match[1]}</strong>{after}</li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Кастодиальные кошельки (индивидуальные и мастер)" - "Кастодиальные кошельки" жирным
                          const parenIndex = text.indexOf('(');
                          if (parenIndex > 0) {
                            return <li key={itemIndex}><strong>{text.substring(0, parenIndex).trim()}</strong> {text.substring(parenIndex)}</li>;
                          }
                          return <li key={itemIndex}><strong>Кастодиальные кошельки</strong></li>;
                        }
                        if (itemIndex === 3) {
                          // "Стейкинг и OTC-desk" - только "Стейкинг" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
                        if (itemIndex === 4) {
                          // "Добавление токенов - фиатных..." - "Добавление токенов" жирным
                          const tokensText = 'Добавление токенов';
                          if (text.startsWith(tokensText)) {
                            const rest = text.substring(tokensText.length);
                            return <li key={itemIndex}><strong>{tokensText}</strong>{rest}</li>;
                          }
                          const dashMatch = text.match(/^(.+?)\s*[-—]\s*(.+)/);
                          if (dashMatch) {
                            return <li key={itemIndex}><strong>{dashMatch[1].trim()}</strong> {dashMatch[2].trim()}</li>;
                          }
                          return <li key={itemIndex}><strong>{tokensText}</strong> {text.substring(tokensText.length)}</li>;
                        }
                      } else if (moduleIndex === 1) {
                        // Fiat Module - русский
                        if (itemIndex === 0) {
                          // "Интеграции с фиатными провайдерами платежей" - только "Интеграции" жирным
                          return <li key={itemIndex}><strong>Интеграции</strong> {text.substring(text.indexOf(' ') + 1)}</li>;
                        }
                        if (itemIndex === 1) {
                          // "Пополнение/вывод средств через..." - "Пополнение/вывод средств" жирным
                          const черезIndex = text.indexOf(' через');
                          if (черезIndex > 0) {
                            return <li key={itemIndex}><strong>{text.substring(0, черезIndex)}</strong>{text.substring(черезIndex)}</li>;
                          }
                          return <li key={itemIndex}><strong>Пополнение/вывод средств</strong> {text.substring(text.indexOf('через'))}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Моментальные переводы между пользователями" - только "переводы" жирным
                          const words = text.split(' ');
                          const переводыIndex = words.indexOf('переводы');
                          if (переводыIndex > 0) {
                            const before = words.slice(0, переводыIndex).join(' ');
                            const after = words.slice(переводыIndex + 1).join(' ');
                            return <li key={itemIndex}>{before} <strong>{words[переводыIndex]}</strong> {after}</li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 3) {
                          // "Интеграция IBANS" - только "Интеграция" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
                        if (itemIndex === 4) {
                          // "On-/Off-ramp функционал" - только "On-/Off-ramp" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
                      } else {
                        // Card Module - русский
                        if (itemIndex === 0) {
                          // "Интеграции с карточными эмитентами" - только "Интеграции" жирным
                          return <li key={itemIndex}><strong>Интеграции</strong> {text.substring(text.indexOf(' ') + 1)}</li>;
                        }
                        if (itemIndex === 1) {
                          // "API доступ к заказу и управлением картами" - только "заказу и управлением картами" жирным
                          const match = text.match(/API\s+доступ\s+к\s+(.+)/);
                          if (match) {
                            return <li key={itemIndex}>API доступ к <strong>{match[1]}</strong></li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Эмиссия виртуальных и брендированных пластиковых карт с поддержкой Apple/Google Pay" - только "Apple/Google Pay" жирным
                          const match = text.match(/(.+?)\s+(Apple\/Google Pay)/);
                          if (match) {
                            return <li key={itemIndex}>{match[1]} <strong>{match[2]}</strong></li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 3) {
                          // "Безлимитные транзакции для пользователей..." - "Безлимитные транзакции" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]} {words[1]}</strong> {words.slice(2).join(' ')}</li>;
                        }
                        if (itemIndex === 4) {
                          // "Пополнение карточных балансов крипто..." - только "Пополнение" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
                      }
                    } else {
                      // АНГЛИЙСКИЙ
                      if (moduleIndex === 0) {
                        // Crypto Module - английский
                        if (itemIndex === 0) {
                          // "Integration with exchanges..." - только "Integration" жирным
                          return <li key={itemIndex}><strong>Integration</strong> {text.substring(text.indexOf(' ') + 1)}</li>;
                        }
                        if (itemIndex === 1) {
                          // "Full functionality for exchange operations: ..." - "exchange operations" жирным
                          const match = text.match(/for\s+(.+?):/);
                          if (match) {
                            const before = text.substring(0, text.indexOf('for') + 4);
                            const after = text.substring(text.indexOf(':'));
                            return <li key={itemIndex}>{before} <strong>{match[1]}</strong>{after}</li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Custodial wallets (individual and master)" - "Custodial wallets" жирным
                          const parenIndex = text.indexOf('(');
                          if (parenIndex > 0) {
                            return <li key={itemIndex}><strong>{text.substring(0, parenIndex).trim()}</strong> {text.substring(parenIndex)}</li>;
                          }
                          return <li key={itemIndex}><strong>Custodial wallets</strong></li>;
                        }
                        if (itemIndex === 3) {
                          // "Staking and OTC desk" - только "Staking" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
                        if (itemIndex === 4) {
                          // "Ability to add tokens — fiat, crypto, and custom" - "add tokens" жирным
                          const match = text.match(/to\s+(add\s+tokens)/);
                          if (match) {
                            const before = text.substring(0, text.indexOf('to') + 3);
                            const after = text.substring(text.indexOf('tokens') + 6);
                            return <li key={itemIndex}>{before} <strong>{match[1]}</strong>{after}</li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                      } else if (moduleIndex === 1) {
                        // Fiat Module - английский
                        if (itemIndex === 0) {
                          // "Integration with fiat payment providers" - только "Integration" жирным
                          return <li key={itemIndex}><strong>Integration</strong> {text.substring(text.indexOf(' ') + 1)}</li>;
                        }
                        if (itemIndex === 1) {
                          // "Deposits/withdrawals via SWIFT, SEPA, cards, local methods" - "Deposits/withdrawals" жирным
                          const match = text.match(/^(.+?)\s+via/);
                          if (match) {
                            return <li key={itemIndex}><strong>{match[1]}</strong> {text.substring(match[0].length - 4)}</li>;
                          }
                          return <li key={itemIndex}><strong>Deposits/withdrawals</strong> {text.substring(text.indexOf('via'))}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Instant peer-to-peer transfers" - только "transfers" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}>{words.slice(0, -1).join(' ')} <strong>{words[words.length - 1]}</strong></li>;
                        }
                        if (itemIndex === 3) {
                          // "IBAN integration" - только "integration" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}>{words[0]} <strong>{words[1]}</strong></li>;
                        }
                        if (itemIndex === 4) {
                          // "On/Off‑ramp functionality" - только "On/Off‑ramp" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
                      } else {
                        // Card Module - английский
                        if (itemIndex === 0) {
                          // "Integration with card issuers" - только "Integration" жирным
                          return <li key={itemIndex}><strong>Integration</strong> {text.substring(text.indexOf(' ') + 1)}</li>;
                        }
                        if (itemIndex === 1) {
                          // "API access to order & manage cards" - "order & manage cards" жирным
                          const match = text.match(/API\s+access\s+to\s+(.+)/);
                          if (match) {
                            return <li key={itemIndex}>API access to <strong>{match[1]}</strong></li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 2) {
                          // "Issuance of virtual and branded plastic cards with Apple/Google Pay" - только "Apple/Google Pay" жирным
                          const match = text.match(/(.+?)\s+with\s+(Apple\/Google Pay)/);
                          if (match) {
                            return <li key={itemIndex}>{match[1]} with <strong>{match[2]}</strong></li>;
                          }
                          return <li key={itemIndex}>{text}</li>;
                        }
                        if (itemIndex === 3) {
                          // "Unlimited transactions for users to partner services" - "Unlimited transactions" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]} {words[1]}</strong> {words.slice(2).join(' ')}</li>;
                        }
                        if (itemIndex === 4) {
                          // "Top‑ups with both crypto and fiat" - только "Top‑ups" жирным
                          const words = text.split(' ');
                          return <li key={itemIndex}><strong>{words[0]}</strong> {words.slice(1).join(' ')}</li>;
                        }
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



