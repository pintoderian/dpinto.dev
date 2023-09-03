'use client';

import useTranslate from '@/hooks/useTranslate';
import Link from 'next/link';

const Menu = ({ className = 'flex-col md:flex-row' }) => {
  const { translate } = useTranslate();

  return (
    <ul className={`flex gap-4 ${className}`}>
      <li className="font-semibold text-neutral-800 dark:text-white">
        <Link href="#about">{translate('about')}</Link>
      </li>
      <li className="font-normal text-neutral-600 dark:text-neutral-500">
        <Link href="#experience">{translate('experience')}</Link>
      </li>
      <li className="font-normal text-neutral-600 dark:text-neutral-500">
        <Link href="#proyects">{translate('proyects')}</Link>
      </li>
      <li className="font-normal text-neutral-600 dark:text-neutral-500">
        <Link href="#skills">{translate('skills')}</Link>
      </li>
    </ul>
  );
};

export default Menu;
