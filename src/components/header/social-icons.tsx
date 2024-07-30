import { Github } from "@react-symbols/icons";
import { IconLinkedin } from "../icons";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { classnames } from "@/lib/classnames";

const socialLinks = [
  {
    url: "mailto:dpintoec@gmail.com",
    icon: AtSymbolIcon
  },
  {
    url: "https://www.linkedin.com/in/pintoderian/",
    icon: IconLinkedin
  },
  {
    url: "https://github.com/pintoderian",
    icon: Github
  }
];

export default function SocialIcons() {
  return (
    <div className="flex flex-row gap-x-3">
      {socialLinks?.map((link, index) => {
        const Icon = link.icon;
        return (
          <Link
            key={`social-${index}`}
            href={link.url}
            className={classnames(
              "group px-2 py-1.5 text-lg",
              "rounded-md shadow-lg shadow-blue-900/60 ring-2 ring-blue-400/20",
              "hover:bg-white/5 hover:text-white"
            )}
            target="_blank"
            rel="nofollow noopener"
          >
            <Icon className="w-[20px] text-blue-100 [&>path]:fill-blue-100 group-hover:[&>path]:fill-white" />
          </Link>
        );
      })}
    </div>
  );
}
