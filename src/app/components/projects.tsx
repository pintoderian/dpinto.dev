"use client";

import { useTranslate } from "@/hooks/useTranslate";
import type { Project } from "@/types/dictionary";
import Image from "next/image";
import Button from "./button";
import {
  IconBrandAws,
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconCarrot,
  IconLink,
  IconRocket,
  IconUserShield
} from "@tabler/icons-react";

const TAGS = {
  NEXTJS: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: IconBrandNextjs,
    iconClass: "text-white"
  },
  TAILWINDCSS: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: IconBrandTailwind,
    iconClass: "text-[#38bdf8]"
  },
  AWS: {
    name: "AWS",
    class: "bg-[#232f3e] text-white",
    icon: IconBrandAws,
    iconClass: "text-[#ff9900]"
  },
  ASTRO: {
    name: "Astro",
    class: "bg-orange-600 text-white",
    icon: IconRocket,
    iconClass: "text-white"
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178c6] text-white",
    icon: IconBrandTypescript,
    iconClass: "text-white"
  },
  DIRECTUS: {
    name: "Directus",
    class: "bg-violet-600 text-white",
    icon: IconCarrot,
    iconClass: "text-white"
  }
};

export default function Projects() {
  const { translate } = useTranslate();
  const projects = translate("projects") as unknown as Project[];

  return (
    <div className="flex flex-col gap-y-16">
      {Array.isArray(projects) &&
        projects?.map(
          (
            { title, image, description, github, link, technologies },
            index
          ) => {
            return (
              <article
                className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
                key={`project-${index}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt={title}
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      src={image}
                      width={475}
                      height={265}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {title}
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row flex-wrap mb-2 gap-2">
                      {technologies.map((technology, index) => {
                        const tag = TAGS[technology as keyof typeof TAGS];
                        if (!tag) return null;
                        return (
                          <li key={`technology-${index}`}>
                            <span
                              className={`flex gap-x-1 rounded-full text-xs ${tag.class} py-1 px-2 `}
                            >
                              <tag.icon className={tag.iconClass} size={16} />
                              {tag.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      {description}
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      {github && (
                        <Button href={github} target="_blank" rel="noopener">
                          <IconBrandGithub size={20} />
                          <span>Github</span>
                        </Button>
                      )}
                      {link && (
                        <Button href={link} target="_blank" rel="noopener">
                          <IconLink size={20} />
                          <span>{translate("visit")}</span>
                        </Button>
                      )}
                    </footer>
                  </div>
                </div>
              </article>
            );
          }
        )}
    </div>
  );
}
