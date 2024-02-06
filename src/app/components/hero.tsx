"use client";
import { useTranslate } from "@/hooks/useTranslate";
import Image from "next/image";
import Button from "./button";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Badge from "./badge";

export default function Hero() {
  const { translate } = useTranslate();
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <Image
          className="rounded-full shadow-lg size-16"
          src="/profile.webp"
          alt="Derian Pinto"
          width={64}
          height={64}
        />
        <a
          href="https://www.linkedin.com/in/pintoderian/"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>{translate("openToWork")}</Badge>
        </a>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        {translate("title")}
      </h1>
      <p
        className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-orange-500 [&>strong]:font-semibold dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: translate("summary") }}
      />
      <nav className="flex flex-wrap gap-4 mt-8">
        <Button href="mailto:dpintoec@gmail.com" target="_blank" rel="noopener">
          <IconMail size={20} />
          <span>Contáctame</span>
        </Button>
        <Button
          href="https://www.linkedin.com/in/pintoderian/"
          target="_blank"
          rel="noopener"
        >
          <IconBrandLinkedin size={20} />
          <span>LinkedIn</span>
        </Button>
      </nav>
    </div>
  );
}
