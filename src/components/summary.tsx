"use client";

import { MDXRemote } from "next-mdx-remote";

export default function Summary({ source }: { source: any }) {
  return (
    <div className="text-xl text-blue-100/90 [&>p>strong]:text-blue-600 [&>p>strong]:font-semibold">
      <MDXRemote {...source} />
    </div>
  );
}
