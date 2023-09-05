'use client';

import useMenu from '@/hooks/useMenu';
import useTranslate from '@/hooks/useTranslate';
import { useEffect } from 'react';

const Menu = ({ className }) => {
  const { activeClass, scrolledDivActive, handleScrollInDiv } = useMenu();
  const { translate } = useTranslate();

  useEffect(() => {
    window.addEventListener('scroll', scrolledDivActive);
    return () => {
      window.removeEventListener('scroll', scrolledDivActive);
    };
  }, [scrolledDivActive]);

  return (
    <ul className={`gap-4 ${className}`}>
      <li className={activeClass('about')}>
        <button onClick={() => handleScrollInDiv('about')}>
          {translate('about')}
        </button>
      </li>
      <li className={activeClass('experience')}>
        <button onClick={() => handleScrollInDiv('experience')}>
          {translate('experience')}
        </button>
      </li>
      <li className={activeClass('skills')}>
        <button onClick={() => handleScrollInDiv('skills')}>
          {translate('skills')}
        </button>
      </li>
    </ul>
  );
};

export default Menu;
