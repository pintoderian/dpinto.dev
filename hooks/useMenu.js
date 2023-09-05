import { useMenuStore } from '@/store/menu';
import useScroll from './useScroll';
import { useCallback } from 'react';

const useMenu = () => {
  const { active, setActive } = useMenuStore();
  const { isScrolledIntoView } = useScroll();

  const activeClass = useCallback(
    (value) => {
      return value === active
        ? 'font-semibold text-neutral-800 dark:text-white'
        : 'font-normal transition-all text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200';
    },
    [active]
  );

  const scrolledDivActive = useCallback(() => {
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

  const handleScrollInDiv = useCallback(
    (value) => {
      setActive(value);
      const element = document?.getElementById(value);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    [setActive]
  );

  return { activeClass, scrolledDivActive, handleScrollInDiv };
};

export default useMenu;
