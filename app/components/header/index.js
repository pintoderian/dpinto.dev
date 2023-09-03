'use client';

import BtnLanguage from './_children/btn-language';
import BtnTheme from './_children/btn-theme';
import Menu from './_children/menu';

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-row w-full py-4 border-b border-neutral-100 dark:border-neutral-800">
      <nav className="w-8/12">
        <Menu />
      </nav>
      <div className="btn-actions flex flex-row justify-end gap-4 w-4/12">
        <BtnLanguage />
        <BtnTheme />
      </div>
    </header>
  );
};

export default Header;
