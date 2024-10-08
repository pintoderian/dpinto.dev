import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES, OOF_GRAD } from "@/lib/constants";
// import { BlurImage } from "@/ui/BlurImage";
// import type { ImageProps } from "next/image";
import NextLink from "next/link";
import React from "react";
// import { Caption } from "@/ui/Caption";
import { classnames } from "./classnames";
import { Grid } from "@/components/grid";
import { Aside } from "@/components/aside";
import { Code } from "@/components/code";
import ButtonLinks from "@/components/button-links";
import ImagePost from "@/components/image-post";

export const components = {
  // Global components
  ImagePost,
  Code,
  Grid,
  Aside,
  ButtonLinks,
  h1: (props: any) => (
    <h2
      className="relative mt-3 border-t-2 border-blue-200/5 pt-9 text-xl font-medium text-blue-200/95 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 border-t-2 border-blue-200/5 pt-9 text-xl font-medium text-blue-200/95 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4 className="text-xl font-medium text-blue-200/95" {...props} />
  ),
  h4: (props: any) => (
    <h5 className="text-lg font-medium text-blue-200/95" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-t-2 border-blue-200/5" {...props} />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          className={classnames(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
          href={href}
          target="_blank"
          rel="noopener"
          {...props}
        />
      );
    }

    return (
      <NextLink
        href={href}
        className={classnames(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
        {...props}
      />
    );
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-2 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-blue-200/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal space-y-3 pl-10" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  /*Img: ({
    children,
    bleed,
    caption,
    ...props
  }: {
    children: React.ReactNode;
    bleed?: boolean;
    caption?: string;
  } & ImageProps) => {
    return (
      <>
        <div
          className={classnames({
            "xl:!col-start-2 xl:!col-end-4": bleed === true
          })}
        >
          <BlurImage {...props} />
        </div>
        {caption ? <Caption>{caption}</Caption> : null}
      </>
    );
  },*/
  // Since markdown blockquotes don't have native support for citations, we
  // reserve `<em>` to style citations.
  blockquote: (props: any) => (
    <blockquote
      className={classnames(
        "relative border-l-2 border-blue-200/5 pl-4 pt-8 before:absolute before:top-5 before:-ml-1 before:-mt-6 before:text-6xl before:text-blue-200/20 before:content-['“'] [&_em]:mt-3 [&_em]:block [&_em]:not-italic [&_em]:leading-none [&_em]:before:pr-1 [&_em]:before:content-['—']",
        OOF_GRAD
      )}
      {...props}
    />
  ),
  del: (props: any) => (
    <del className="text-blue-200/50 line-through" {...props} />
  )
};
