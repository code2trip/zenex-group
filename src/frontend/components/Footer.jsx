'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '@/styles/components/footer.scss';

export default function Footer() {
  const t = useTranslations('common');
  const tNav = useTranslations('common.nav');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ru';

  return (
    <footer className="w-full footer" id="footer">
      <div className="footerInner">
        <div className="footerContent">
          {/* Title */}
          <div className="titleSection">
            <h2 className="titleHeading">
              {t('letsMakeProfit')}
            </h2>
            <a
              href={`mailto:${t('email')}`}
              className="emailLink"
            >
              {t('email')}
            </a>
          </div>

          {/* Menu tabs */}
          <nav className="menuSection">
            <a href="#projects" className="menuLink">
              {tNav('projects')}
            </a>
            <Link href={`/${locale}/career#form`} className="menuLink">
              {tNav('career')}
            </Link>
            <Link href={`/${locale}/news`} className="menuLink">
              {tNav('news')}
            </Link>
            <a href="#footer" className="menuLink">
              {tNav('contact')}
            </a>
            <Link href={`/${locale}/privacy-policy`} className="menuLink">
              {t('privacyPolicy')}
            </Link>
          </nav>

          {/* Legal */}
          <div className="legalSection">
            {/* Company 1 - Left */}
            <div className="legalBlock">
              <div className="legalDivider" />
              <p className="legalTextLeft">
                Name: ZENEX Game Ltd. Address: 10 ANSON ROAD #20-05, INTERNATIONAL PLAZA, SINGAPORE, 079903. Reg.number: (UEN): 202243071W. Activities: Development of software and applications (except games and cybersecurity)
              </p>
            </div>

            {/* Company 2 - Right */}
            <div className="legalBlock">
              <div className="legalDivider" />
              <p className="legalTextRight">
                Name: TAU impex s.r.o. Address: Klecanska 369 Zdiby; Stredocesky; 25066. Reg.number: 247 09 891 Klecanská 369, 250 66 Zdiby, Czech republic. Activity: Poskytování služeb spojených s virtuálním активом (Provision of services related to virtual assets)
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyrightSection">
            <p className="copyrightText">
              Copyright © 2025 <br />Zenex. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

