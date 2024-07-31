import Link from "next/link";
import { IconArrow } from "./icons";

type LinksProps = {
  title: string;
  url: string;
};

export default function ButtonLinks({ data }: { data: LinksProps[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-4 relative">
      {data?.map((item, index) => {
        return (
          <Link
            key={`link-${index}`}
            className="group flex flex-row gap-1 items-center px-4 py-2 rounded-xl bg-black shadow-lg shadow-blue-900/60 ring-2 ring-blue-400/20 hover:shadow-lg hover:shadow-blue-700 hover:ring-blue-400/30"
            href={item.url}
            target="_blank"
            rel="nofollow noopener"
          >
            <span className="text-white text-base">{item.title}</span>
            <span className="text-xs text-white">
              <IconArrow />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
