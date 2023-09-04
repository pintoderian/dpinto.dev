import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isScroll, setIsScroll] = useState(false);

  const hasScrolled = () => {
    const scrollTop = window.scrollY;
    const header = document.getElementsByTagName('header')[0];
    const headerHeight = header.scrollHeight;
    if (scrollTop > headerHeight) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const isScrolledIntoView = (id) => {
    const el = document.getElementById(id);
    const rect = el.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || clientHeight) &&
      rect.right <= (window.innerWidth || clientWidth)
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', hasScrolled);
    return () => {
      window.removeEventListener('scroll', hasScrolled);
    };
  }, []);

  return { isScroll, isScrolledIntoView };
};

export default useScroll;
