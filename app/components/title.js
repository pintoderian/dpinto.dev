'use client';

const Title = ({ className, text }) => {
  if (!text) {
    return null;
  }

  return (
    <div
      className={`title font-bold text-2xl text-black dark:text-white ${className}`}
    >
      {text}
    </div>
  );
};

export default Title;
