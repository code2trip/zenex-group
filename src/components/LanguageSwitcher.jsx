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
      const segments = pathname.split('/');
      segments[1] = otherLocale;
      const newPath = segments.join('/');
      router.push(newPath);
    }
  };

  return (
    <div className="language-switcher">
      <button
        onClick={switchLocale}
        className="active"
        type="button"
      >
        {currentLocale.toUpperCase()}
      </button>
    </div>
  );
}

