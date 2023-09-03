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

  useEffect(() => {
    window.addEventListener('scroll', hasScrolled);
    return () => {
      window.removeEventListener('scroll', hasScrolled);
    };
  }, []);

  return { isScroll };
};

export default useScroll;
