'use client';

import useScroll from '@/hooks/useScroll';
import useTranslate from '@/hooks/useTranslate';
import { useEffect, useState } from 'react';
import Menu from './header/_children/menu';
import { IconMenu } from './icons';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isScroll } = useScroll();
  const { translate } = useTranslate();
  const classScroll = isScroll ? 'lg:pt-5' : '';

  useEffect(() => {
    if (!isScroll) {
      setOpenMenu(false);
    }
  }, [isScroll]);

  return (
    <aside className="relative overflow-visible h-full">
      <div
        id="side-content"
        className={`sticky block top-0 transition-all ${classScroll}`}
      >
        {isScroll && (
          <div className="menu-scroll relative hidden lg:block">
            <button
              className="bg-gray-200 rounded-lg dark:bg-neutral-800 text-sm px-1.5 py-1.5 hover:ring-2 ring-gray-300 transition-all"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IconMenu />
            </button>
            {openMenu && (
              <div className="absolute top-14 bg-gray-200 dark:bg-neutral-800 p-4 rounded-lg">
                <Menu className="flex-col" />
              </div>
            )}
          </div>
        )}
        <div className="py-14 flex flex-col">
          <h1 className="font-bold text-3xl md:text-5xl mb-1 text-black dark:text-white lg:ml-[-2px]">
            Derian Pinto
          </h1>
          <h2 className="text-neutral-700 dark:text-neutral-400 font-semibold mb-4">
            {translate('badge')}
          </h2>
          <p className="prose prose-neutral dark:prose-invert">
            {translate('resume')}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
