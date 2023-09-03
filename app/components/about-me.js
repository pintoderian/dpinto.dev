'use client';

import useTranslate from '@/hooks/useTranslate';
import Title from './title';

const AboutMe = () => {
  const { translate } = useTranslate();
  const data = translate('aboutme');

  return (
    <section
      id="about"
      className="description prose prose-neutral dark:prose-invert"
    >
      <Title text={translate('about')} />
      {data &&
        data.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
    </section>
  );
};

export default AboutMe;
