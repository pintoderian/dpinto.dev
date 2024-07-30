import { formatDate } from "@/lib/utils";
import Subtitle from "./subtitle";
import { getPosts } from "@/services/database";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts({ limit: 3 });

  return (
    <div className="posts">
      <Subtitle text="Últimos Artículos" />
      <div className="divide-y-2 divide-dashed divide-blue-200/5 space-y-4 -mt-3 md:-mt-6">
        {posts?.map((post, index) => {
          const { title, dateCreated, summary } = post.entry;

          return (
            <Link
              className="block group overflow-hidden rounded-lg py-5 md:py-8 shadow-surface-elevation-low transition duration-300"
              key={`post-${index}`}
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center gap-x-2">
                  <h4 className="text-base md:text-lg text-blue-100/90 group-hover:text-blue-600">
                    {title}
                  </h4>
                  <span className="text-xs">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="text-geist-900 duration-300 ease-out group-hover:rotate-45 group-hover:text-geist-1000"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </span>
                </div>
                <span className="text-sm md:text-base text-blue-100/50">
                  {formatDate(dateCreated)}
                </span>
                <p className="mt-4 text-sm md:text-base text-blue-100/70 line-clamp-3 group-hover:opacity-80">
                  {summary}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
