import { IconArrow } from "@/components/icons";
import { classnames } from "@/lib/classnames";
import { OOF_GRAD } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { getPosts } from "@/services/database";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog",
    url: "/blog",
    images: "/og?title=Blog"
  }
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="mt-8 space-y-10">
      <h1
        className={classnames(
          "mt-6 text-2xl font-medium sm:text-4xl",
          OOF_GRAD
        )}
      >
        Blog
      </h1>

      <div className="space-y-6">
        {posts?.map((post, index) => {
          const { title, dateCreated, summary } = post.entry;

          return (
            <Link
              className="block group overflow-hidden rounded-lg bg-white/5 p-5 md:p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              key={`post-${index}`}
              href={`/blog/${post.slug}`}
            >
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="text-base md:text-lg text-blue-100/90">
                      {title}
                    </h2>
                    <span className="text-xs">
                      <IconArrow />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base text-blue-100/50">
                      {formatDate(dateCreated)}
                    </span>
                    <p className="mt-4 text-sm md:text-base text-blue-100/70 line-clamp-3 group-hover:opacity-80">
                      {summary}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
