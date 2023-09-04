'use client';

import Link from 'next/link';
import { IconGithub, IconLinkedin } from '../../icons';

const Social = () => {
  return (
    <div className="flex flex-row gap-4 justify-center md:justify-start">
      <Link
        className="social-link"
        target="_blank"
        href="https://github.com/pintoderian"
      >
        <i>
          <IconGithub />
        </i>
        <span>Github</span>
      </Link>
      <Link
        className="social-link"
        target="_blank"
        href="https://www.linkedin.com/in/pintoderian/"
      >
        <i>
          <IconLinkedin />
        </i>
        <span>Linkedin</span>
      </Link>
    </div>
  );
};

export default Social;
