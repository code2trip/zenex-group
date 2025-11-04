'use client';

import { useEffect } from 'react';
import initSplitText from '@/js/modules/init-split-text';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader');

    async function waitForFonts() {
      try {
        await Promise.all([
          document.fonts.load('1rem "Coolvetica"'),
          document.fonts.load('700 1rem "Coolvetica"'),
        ]);
      } catch (error) {
        console.warn('Ошибка при загрузке шрифтов:', error);
      }
    }

    async function simulateLoading() {
      try {
        await waitForFonts();
        await initSplitText();

        loader?.classList.add('loading-ended');

        requestAnimationFrame(() => {
          loader?.classList.add('loaded');
          document.body.classList.add('loaded');

          const onLoaderLoaded = new CustomEvent('onLoaderLoaded');
          window.dispatchEvent(onLoaderLoaded);
        });
      } catch (error) {
        console.error('Ошибка во время загрузки:', error);
      }
    }

    simulateLoading();
  }, []);

  return <div id="loader" />;
}

