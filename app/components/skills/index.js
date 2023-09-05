'use client';

import useTranslate from '@/hooks/useTranslate';
import skills from '@/data/skills';
import Title from '../title';

const SkillSection = () => {
  const { translate } = useTranslate();

  return (
    <section id="skills">
      <Title className="my-5" text={translate('skills')} />
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-4">
        {skills &&
          skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                className="rounded-lg border-neutral-100 dark:border-neutral-800 border flex flex-col justify-center gap-2 w-full items-center py-3"
                key={index}
              >
                <i className="text-2xl">
                  <Icon />
                </i>
                <span className="text-sm">{skill.name}</span>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SkillSection;
