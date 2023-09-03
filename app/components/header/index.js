'use client';

import Link from 'next/link';
import BtnLanguage from './_children/btn-language';
import BtnTheme from './_children/btn-theme';
import useTranslate from '@/hooks/useTranslate';

const Header = () => {
  const { translate } = useTranslate();
  return (
    <header className="flex items-center justify-between flex-row w-full py-4 border-b border-neutral-100 dark:border-neutral-800">
      <nav className="w-8/12">
        <ul className="flex flex-row gap-4">
          <li className="font-semibold text-neutral-800 dark:text-white">
            <Link href="#about">{translate('about')}</Link>
          </li>
          <li className="font-normal text-neutral-600 dark:text-neutral-500">
            {translate('experience')}
          </li>
          <li className="font-normal text-neutral-600 dark:text-neutral-500">
            {translate('proyects')}
          </li>
          <li className="font-normal text-neutral-600 dark:text-neutral-500">
            {translate('skills')}
          </li>
        </ul>
      </nav>
      <div className="btn-actions flex flex-row justify-end gap-4 w-4/12">
        <BtnLanguage />
        <BtnTheme />
      </div>
    </header>
  );
};

export default Header;
