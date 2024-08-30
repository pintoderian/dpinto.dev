"use client";

import { classnames } from "@/lib/classnames";
import { MDXRemote } from "next-mdx-remote";

export default function Summary({
  className,
  source
}: {
  className?: string;
  source: any;
}) {
  return (
    <div
      className={classnames(
        "text-xl text-blue-100/90 [&>p>strong]:text-blue-600 [&>p>strong]:font-semibold",
        className
      )}
    >
      <MDXRemote {...source} />
    </div>
  );
}
