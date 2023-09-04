'use client';

import { useCallback, useState } from 'react';
import BtnLanguage from './_children/btn-language';
import BtnTheme from './_children/btn-theme';
import Menu from './_children/menu';
import { IconMenu } from '../icons';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [classMenu, setClassMenu] = useState('hidden');

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    if (openMenu) {
      setClassMenu(
        'flex transition-all absolute top-14 bg-gray-200 dark:bg-neutral-800 p-4 rounded-lg z-50'
      );
    } else {
      setClassMenu('hidden');
    }
  }, [openMenu, setClassMenu]);

  return (
    <header className="flex items-center justify-between flex-row w-full py-4 border-b border-neutral-100 dark:border-neutral-800">
      <nav className="w-8/12 relative">
        <button
          className="bg-gray-200 rounded-lg dark:bg-neutral-800 text-sm px-1.5 py-1.5 hover:ring-2 ring-gray-300 transition-all block lg:hidden"
          onClick={handleMenu}
        >
          <IconMenu size={20} />
        </button>
        <Menu className={`${classMenu} lg:flex flex-col md:flex-row`} />
      </nav>
      <div className="btn-actions flex flex-row justify-end gap-4 w-4/12">
        <BtnLanguage />
        <BtnTheme />
      </div>
    </header>
  );
};

export default Header;
