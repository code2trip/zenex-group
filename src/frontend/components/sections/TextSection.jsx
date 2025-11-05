'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import '@/styles/sections/text-section.scss';

export default function TextSection() {
  const pathname = usePathname();
  const isTerms = pathname?.includes('/terms');
  const isPrivacy = pathname?.includes('/privacy-policy');
  const t = useTranslations(isTerms ? 'terms' : isPrivacy ? 'privacy' : '');

  return (
    <section className="text-section">
      <div className="container">
        <div className="text-section__inner">
          <span className="text-section__date">January 27, 2025</span>
          <h1 className="text-section__title">
            {isTerms ? t('title') : isPrivacy ? t('title') : 'Article Content'}
          </h1>
          <div className="text-section__text">
            <p>LAST UPDATED: May 2024</p>
            <p>
              IMPORTANT, READ CAREFULLY: Customer's use of and access to the platform and products and services
              described on Customer's order form(s) (collectively, the "Services") provided by our company and its
              affiliates is conditioned upon Customer's compliance with and acceptance of these Terms and Conditions.
            </p>
            <p>
              BY ACCEPTING THIS AGREEMENT—WHETHER BY (1) CLICKING A BOX TO INDICATE ACCEPTANCE, (2) SIGNING AN ORDER
              FORM THAT REFERENCES THIS AGREEMENT, OR (3) USING THE EVALUATION SERVICES—THE CUSTOMER AGREES TO BE BOUND
              BY ITS TERMS. IF THE INDIVIDUAL ACCEPTING THIS AGREEMENT IS DOING SO ON BEHALF OF A COMPANY OR OTHER LEGAL
              ENTITY, THEY REPRESENT THAT THEY HAVE THE AUTHORITY TO BIND THAT ENTITY TO THESE TERMS AND CONDITIONS.
            </p>
            <p>
              BY PURCHASING, USING, OR OTHERWISE ACCESSING ANY OF THE SERVICES, CUSTOMER EXPRESSLY AGREES TO BE BOUND
              BY THESE TERMS AND CONDITIONS AND ALL ORDER FORMS AND POLICIES INCORPORATED HEREIN BY REFERENCE (THE
              "AGREEMENT"). THE SERVICES ARE NOT AVAILABLE TO PERSONS WHO ARE NOT LEGALLY ELIGIBLE TO BE BOUND BY THESE
              TERMS.
            </p>
            <p>1. Services</p>
            <p>1.1 Provision and Access</p>
            <p>
              We will make the Services available to Customer pursuant to this Agreement and the applicable Order Form
              and then-current version of any supporting technical documentation provided to Customer or available on our
              website ("Documentation"). The Services are provided on a subscription basis for the applicable
              subscription term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

