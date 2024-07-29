import { classnames } from "@/lib/classnames";
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";
import {
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon
} from "@heroicons/react/24/solid";
import { Github } from "@react-symbols/icons";
import Link from "next/link";
import React, { ElementType } from "react";

function NavItem({
  children,
  href,
  isActive,
  Icon,
  target = "_self"
}: {
  children?: React.ReactNode;
  href: string;
  isActive?: boolean;
  Icon: ElementType;
  target?: string;
}) {
  return (
    <Link
      href={href}
      className={classnames("group", FOCUS_VISIBLE_OUTLINE)}
      target={target}
      rel={target === "self" ? "" : "nofollow noopener"}
    >
      <div className="sm:flex sm:items-center sm:gap-x-2">
        <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
          <div
            className={classnames(
              "rounded-lg bg-gradient-to-tl from-blue-400 to-blue-500/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1",
              {
                "ring-[2px] ring-purple-500/30 ring-offset-1 ring-offset-black/5":
                  isActive
              }
            )}
          >
            <Icon className="w-[16px] [&>path]:fill-blue-100 transform text-blue-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
          </div>
        </div>
        {children && (
          <div className="transition-colors group-hover:text-blue-50">
            {children}
          </div>
        )}
      </div>
    </Link>
  );
}

export const Nav = () => {
  return (
    <div className="flex items-center space-x-3 lg:space-x-5 text-base font-medium leading-none text-blue-100/90">
      <NavItem href="/blog" Icon={ChatBubbleBottomCenterTextIcon}>
        Blog
      </NavItem>

      <NavItem href="https://codegea.com" Icon={GlobeAltIcon} target="_blank">
        Sitio Web
      </NavItem>

      <NavItem
        href="https://codegea.com"
        Icon={Github}
        target="_blank"
      ></NavItem>

      <NavItem
        href="https://codegea.com"
        Icon={GlobeAltIcon}
        target="_blank"
      ></NavItem>
    </div>
  );
};
