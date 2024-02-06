"use client";
import { useTranslate } from "@/hooks/useTranslate";
import { IconHeart } from "@tabler/icons-react";
import { useMemo } from "react";

const Footer = () => {
  const { translate } = useTranslate();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="w-full mx-auto mt-16 container lg:max-w-4xl md:max-w-2xl">
      <div className="py-4 text-sm text-zinc-800/90 dark:text-zinc-200/90 text-center border-t border-neutral-100 dark:border-neutral-900">
        <div className="flex flex-row gap-1 items-center justify-center">
          <span>
            {translate("created")} NextJs {translate("and")}
          </span>
          <IconHeart
            className="text-orange-800 dark:text-purple-800"
            size={18}
          />
        </div>
        <div className="text-sm">
          © {year} dpinto.dev | {translate("copyright")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
