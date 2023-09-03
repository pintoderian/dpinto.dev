'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconDark, IconLight } from '../../icons';

const BtnTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    return setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <button className="bg-gray-200 rounded-lg dark:bg-neutral-800 px-1.5 py-1.5 hover:ring-2 ring-gray-300 transition-all">
        <span className="block w-5 h-5"></span>
      </button>
    );
  }

  return (
    <button
      className="bg-gray-200 rounded-lg dark:bg-neutral-800 px-1.5 py-1.5 hover:ring-2 ring-gray-300 transition-all"
      onClick={handleTheme}
    >
      {theme === 'light' ? <IconDark /> : <IconLight />}
    </button>
  );
};

export default BtnTheme;
