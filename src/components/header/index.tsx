import { classnames } from "@/lib/classnames";
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";
import { Nav } from "./nav";
import { ProfileImage } from "../profile-image";
import Link from "next/link";

export function Header() {
  return (
    <div className="rounded-lg bg-gray-800/95 py-2 pl-2.5 pr-6 shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          title="Navigate home"
          className={classnames("rounded-full", FOCUS_VISIBLE_OUTLINE)}
        >
          <ProfileImage />
        </Link>

        <Nav />
      </div>
    </div>
  );
}
