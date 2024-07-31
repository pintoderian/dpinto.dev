"use client";

import { classnames } from "@/lib/classnames";
import { Heading } from "@/lib/mdx-serializer";

export const PostTableOfContents = ({
  headings
}: {
  headings: NonNullable<Heading[]>;
}) => {
  return (
    <div>
      <div className="mb-2.5 text-xs uppercase text-blue-200/30">
        En esta página
      </div>

      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => {
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={classnames(
                  "block text-blue-200/50 underline-offset-2 transition-all hover:text-blue-100 hover:underline hover:decoration-blue-200/50",
                  {
                    "pl-3": heading.level === 2,
                    "pl-6": heading.level === 3
                  }
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
