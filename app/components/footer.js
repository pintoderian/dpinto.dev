'use client';

import useTranslate from '@/hooks/useTranslate';
import { useMemo } from 'react';

const Footer = () => {
  const { translate } = useTranslate();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="w-full py-4 border-t border-neutral-100 dark:border-neutral-800">
      <div className="text-neutral-700 dark:text-neutral-400 text-center">
        <div>
          {translate('created')} NextJs {translate('and')} ❤️
        </div>
        <div>
          © {year} Derian Pinto. {translate('copyright')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
