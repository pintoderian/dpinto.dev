"use client";

import { PostTableOfContents } from "@/components/post-table-of-contents";
import { classnames } from "@/lib/classnames";
import { OOF_GRAD } from "@/lib/constants";
import { components } from "@/lib/mdx";
import { Heading } from "@/lib/mdx-serializer";
import { formatDate } from "@/lib/utils";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

interface MDXContentProps {
  title?: string;
  date?: string;
  headings?: Heading[];
  source: MDXRemoteProps;
}

export default function ContentPreview({
  title,
  date,
  headings,
  source
}: MDXContentProps) {
  return (
    <>
      <div className="mt-24 mb-4">
        {title && (
          <h1
            className={classnames(
              "mt-6 text-2xl font-medium sm:text-4xl",
              OOF_GRAD
            )}
          >
            {title}
          </h1>
        )}

        <div className="mt-4 flex space-x-2 text-blue-200/50">
          {date && <div>{formatDate(date)}</div>}
        </div>
      </div>
      <MDXRemote {...source} components={components} />

      <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-3 xl:block">
        <div className="space-y-6">
          {headings ? (
            <>
              <PostTableOfContents headings={headings} />
              <div className="border-t-2 border-blue-200/5"></div>
            </>
          ) : null}

          <div className="flex items-center justify-between">
            {/* <ScrollToTop>Back to top</ScrollToTop> */}
          </div>
        </div>
      </div>
    </>
  );
}
