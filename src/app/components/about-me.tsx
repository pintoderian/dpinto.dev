"use client";

import { useTranslate } from "@/hooks/useTranslate";
import { calculateAge } from "@/utils/age";
import Image from "next/image";

const AboutMe = () => {
  const { translate } = useTranslate();
  const data = translate("aboutme") as string[];
  const myAge = calculateAge("1995-11-24").toString();

  return (
    <article
      id="about"
      className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"
    >
      <div className="[&>p]:mb-4 [&>p>strong]:text-orange-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        {data &&
          data.map((line: string, index: number) => {
            return (
              <p key={`about-${index}`}>{line.replace(":year:", myAge)}</p>
            );
          })}
      </div>
      <Image
        style={{ objectPosition: "50% 50%" }}
        className="order-1 object-cover w-64 h-full p-1 bg-white md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl dark:bg-yellow-500/5 ring-1 ring-white/20 "
        src="/about.webp"
        alt="Derian Pinto"
        width={200}
        height={200}
        loading="lazy"
      />
    </article>
  );
};

export default AboutMe;
