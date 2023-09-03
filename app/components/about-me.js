'use client';

import useTranslate from '@/hooks/useTranslate';

const AboutMe = () => {
  const { translate } = useTranslate();
  const data = translate('aboutme');

  return (
    <section
      id="about"
      className="description prose prose-neutral dark:prose-invert"
    >
      <div className="title font-bold text-2xl text-black dark:text-white">
        {translate('about')}
      </div>
      {data &&
        data.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
    </section>
  );
};

export default AboutMe;
