'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchLocale = () => {
    const otherLocale = routing.locales.find(locale => locale !== currentLocale);
    if (otherLocale) {
      let pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
      if (!pathWithoutLocale || pathWithoutLocale === '') {
        pathWithoutLocale = '/';
      }
      if (pathWithoutLocale !== '/' && !pathWithoutLocale.startsWith('/')) {
        pathWithoutLocale = '/' + pathWithoutLocale;
      }
      const newPath = `/${otherLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
      router.push(newPath);
    }
  };

  const otherLocale = routing.locales.find(locale => locale !== currentLocale);

  return (
    <div className="language-switcher">
      <button
        onClick={switchLocale}
        className="active"
        type="button"
      >
        {otherLocale ? otherLocale.toUpperCase() : currentLocale.toUpperCase()}
      </button>
    </div>
  );
}

