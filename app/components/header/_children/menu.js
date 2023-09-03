'use client';

import useTranslate from '@/hooks/useTranslate';
import { useMenuStore } from '@/store/menu';
import Link from 'next/link';
import { useCallback } from 'react';

const Menu = ({ className = 'flex-col md:flex-row' }) => {
  const { active, setActive } = useMenuStore();
  const { translate } = useTranslate();

  const activeClass = useCallback(
    (value) => {
      return value === active
        ? 'font-semibold text-neutral-800 dark:text-white'
        : 'font-normal transition-all text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200';
    },
    [active]
  );

  return (
    <ul className={`flex gap-4 ${className}`}>
      <li className={activeClass('about')}>
        <Link href="#about" onClick={() => setActive('about')}>
          {translate('about')}
        </Link>
      </li>
      <li className={activeClass('experience')}>
        <Link href="#experience" onClick={() => setActive('experience')}>
          {translate('experience')}
        </Link>
      </li>
      <li className={activeClass('proyects')}>
        <Link href="#proyects" onClick={() => setActive('proyects')}>
          {translate('proyects')}
        </Link>
      </li>
      <li className={activeClass('skills')}>
        <Link href="#skills" onClick={() => setActive('skills')}>
          {translate('skills')}
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
