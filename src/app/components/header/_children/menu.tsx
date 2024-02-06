"use client";

import { useTranslate } from "@/hooks/useTranslate";
import { classnames } from "@/utils/classnames";

const Menu = ({ className }: { className?: string }) => {
  const { translateArray } = useTranslate();
  const keywords = ["experience", "project", "about"];
  const menuOptions = translateArray(keywords);

  return (
    <ul className={classnames("gap-4 flex flex-row", className)}>
      {menuOptions.map((option, index) => (
        <li key={index}>
          <a href={`/#${keywords[index]}`} aria-label={option} title={option}>
            {option}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
