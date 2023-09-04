'use client';

import useScroll from '@/hooks/useScroll';
import useTranslate from '@/hooks/useTranslate';
import { useMenuStore } from '@/store/menu';
import { useCallback, useEffect } from 'react';

const Menu = ({ className }) => {
  const { active, setActive } = useMenuStore();
  const { translate } = useTranslate();
  const { isScrolledIntoView } = useScroll();

  const scrolledActive = useCallback(() => {
    const isScrolledAbout = isScrolledIntoView('about');
    const isScrolledSkills = isScrolledIntoView('skills');
    if (isScrolledAbout) {
      setActive('about');
    } else if (!isScrolledAbout && !isScrolledSkills) {
      setActive('experience');
    } else if (isScrolledSkills) {
      setActive('skills');
    }
  }, [setActive, isScrolledIntoView]);

  useEffect(() => {
    window.addEventListener('scroll', scrolledActive);
    return () => {
      window.removeEventListener('scroll', scrolledActive);
    };
  }, [scrolledActive]);

  const activeClass = useCallback(
    (value) => {
      return value === active
        ? 'font-semibold text-neutral-800 dark:text-white'
        : 'font-normal transition-all text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200';
    },
    [active]
  );

  const handleAction = useCallback(
    (value) => {
      setActive(value);
      const element = document?.getElementById(value);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    [setActive]
  );

  return (
    <ul className={`gap-4 ${className}`}>
      <li className={activeClass('about')}>
        <button onClick={() => handleAction('about')}>
          {translate('about')}
        </button>
      </li>
      <li className={activeClass('experience')}>
        <button onClick={() => handleAction('experience')}>
          {translate('experience')}
        </button>
      </li>
      <li className={activeClass('skills')}>
        <button onClick={() => handleAction('skills')}>
          {translate('skills')}
        </button>
      </li>
    </ul>
  );
};

export default Menu;
