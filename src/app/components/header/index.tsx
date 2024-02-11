"use client";

import BtnLanguage from "./_children/btn-language";
import BtnTheme from "./_children/btn-theme";
import Menu from "./_children/menu";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-4 py-2 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center divide-x divide-gray-300 dark:divide-neutral-500">
        <Menu className="pr-4" />
        <div className="flex flex-row justify-end gap-4 pl-4">
          <BtnLanguage />
          <BtnTheme />
        </div>
      </nav>
    </header>
  );
}
