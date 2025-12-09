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
          {/* Logo - только для <500px */}
          <img 
            src="/assets/logo2.svg" 
            alt="Logo" 
            className="footerLogo"
          />
          
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
            <a href={`/${locale}/contact`} className="menuLink">
              {tNav('contact')}
            </a>
            <Link href={`/${locale}/privacy`} className="menuLink">
              {t('privacyPolicy')}
            </Link>
            <Link href={`/${locale}/terms`} className="menuLink">
              {t('termsOfService')}
            </Link>
          </nav>

          {/* Legal */}
          <div className="legalSection">
            {/* Company 1 - Left */}
            <div className="legalBlock">
              <div className="legalDivider" />
              <p className="legalTextLeft">
                {t('footer.company1')}
              </p>
            </div>

            {/* Company 2 - Right */}
            <div className="legalBlock">
              <div className="legalDivider" />
              <p className="legalTextRight">
                {t('footer.company2')}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyrightSection">
            <p className="copyrightText">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

