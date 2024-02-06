"use client";

import { useTranslate } from "@/hooks/useTranslate";
import type { Experience as ExperienceType } from "@/types/dictionary";
import { IconEU, IconEcuavisa, IconOrodelti, IconSVT } from "../icons";
import ExperienceItem from "./_children/experience-item";

const icons: { [key: string]: () => JSX.Element } = {
  eluniverso: IconEU,
  ecuavisa: IconEcuavisa,
  svtechnology: IconSVT,
  orodelti: IconOrodelti
};

export default function Experience() {
  const { translate } = useTranslate();
  const btnText = translate("readmore") as string;
  const experiences = translate("experiences") as unknown as ExperienceType[];

  return (
    <ol className="relative mt-16">
      {experiences.map((experience, index) => {
        const Icon = icons[experience.icon];
        return (
          <li key={`experience-${index}`} className="lg:mb-4">
            <div className="relative pb-12 grid md:grid-cols-5 md:gap-8 md:space-x-4">
              <div className="relative pb-6 lg:pb-12 md:col-span-2">
                <div className="flex flex-row items-start gap-4">
                  <div className="mt-1.5">
                    <Icon />
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-purple-400">
                      {experience.title}
                    </h3>
                    <h4 className="font-semibold text-lg text-gray-500 dark:text-white">
                      {experience.company}
                    </h4>
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                      {experience.date}
                    </time>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                {experience.summary}
                {experience.activities && (
                  <div className="flex item-start">
                    <ExperienceItem
                      btnText={btnText}
                      activities={experience.activities}
                    />
                  </div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
