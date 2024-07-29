import { formatDate } from "@/lib/utils";
import Subtitle from "./subtitle";
import { getPosts } from "@/services/database";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts({ limit: 3 });

  return (
    <div className="posts">
      <Subtitle text="Últimos Artículos" />
      <div className="space-y-6">
        {posts?.map((post, index) => {
          const { title, dateCreated, summary } = post.entry;

          return (
            <Link
              className="block group overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              key={`post-${index}`}
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-lg text-blue-100/90">{title}</h4>
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
                <span className="text-base text-blue-100/50">
                  {formatDate(dateCreated)}
                </span>
                <p className="mt-4 text-base text-blue-100/70 line-clamp-3">
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
