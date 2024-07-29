import { serialize as MDXSerialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions
} from "./rehye-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { HEADING_LINK_ANCHOR } from "./constants";
import { visit } from "unist-util-visit";

export type Heading = {
  id: string;
  text: string;
  level: number;
};

type Scope = {
  headings: Heading[];
};

const serialize = async ({
  source,
  scope
}: {
  source: string;
  scope: Scope;
}) => {
  if (!scope.headings) {
    scope.headings = [];
  }

  return await MDXSerialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: [HEADING_LINK_ANCHOR]
              }
            }
          ]
        ],
        [rehypePrettyCode, rehypePrettyCodeOptions],
        [rehypePrettyCodeClasses],
        () => (tree) => {
          visit(tree, "element", (node: any) => {
            if (/^h[1-6]$/.test(node.tagName)) {
              scope.headings.push({
                id: node.properties.id,
                text: node.children[0].value,
                level: parseInt(node.tagName.replace("h", ""), 10)
              });
            }
          });
        }
      ]
    },
    scope: { headings: scope.headings }
  });
};

export { serialize };
