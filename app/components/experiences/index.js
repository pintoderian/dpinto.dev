'use client';

import useTranslate from '@/hooks/useTranslate';
import Resume from './_children/resume';
import Title from '../title';

const Experiences = () => {
  const { translate } = useTranslate();
  const data = translate('experiences');

  return (
    <section id="experience">
      <Title className="my-5" text={translate('experience')} />
      <div className="flex flex-col gap-4 border-l border-neutral-100 dark:border-neutral-800">
        {data &&
          data.map((experience, index) => {
            return (
              <div className="flex flex-row gap-4" key={index}>
                <div className="relative px-2">
                  <span className="block absolute -left-2 top-0 w-4 h-4 bg-gray-200 dark:bg-neutral-800 rounded-full"></span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-semibold text-black dark:text-white">
                    {experience.title}
                  </div>
                  <div className="text-neutral-700 dark:text-neutral-400 text-sm flex flex-row gap-3">
                    <span>{experience.company}</span>
                    <span>{experience.employmentStatus}</span>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-400 text-sm">
                    {experience.date}
                  </span>
                  <Resume
                    text={experience.resume}
                    textLarge={experience.description}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Experiences;
