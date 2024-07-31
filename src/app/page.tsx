import Badge from "@/components/badge";
import Experiences from "@/components/experiences";
import { Header } from "@/components/header";
import SocialIcons from "@/components/header/social-icons";
import { IntersectionSwap } from "@/components/intersection-swap";
import HomeLayout from "@/components/layouts/home";
import Posts from "@/components/posts";
import { ProfileImageLarge } from "@/components/profile-image";
import Projects from "@/components/projects";
import Summary from "@/components/summary";
import { getSettings } from "@/services/database";
import { serialize } from "next-mdx-remote/serialize";

export default async function Home() {
  const setting = await getSettings();
  const currentYear = new Date().getFullYear();
  const yearOfWork = setting?.yearOfWork ?? 0;
  const totalStartYear = currentYear - yearOfWork;

  const summary = await setting?.summary();
  const renderSummary = summary?.replace(":year:", totalStartYear?.toString());
  const mdxSource = await serialize(renderSummary ?? "");

  return (
    <HomeLayout>
      <IntersectionSwap nav={<Header />}>
        <div className="space-y-8">
          <div className="flex items-start md:items-center space-x-6">
            <ProfileImageLarge src={setting?.image ?? ""} />

            <div className="mt-2 relative">
              <div className="flex flex-col md:flex-row">
                <div>
                  <h1 className="text-3xl font-semibold leading-none text-blue-100/90">
                    <span>{setting?.name}</span>
                  </h1>
                  <h2 className="mt-2 space-y-2 text-lg font-medium leading-none text-blue-100/50 lg:mt-0">
                    <div className="whitespace-nowrap py-1">{setting?.job}</div>
                  </h2>
                </div>
                {setting?.openToWork && (
                  <div className="text-center m-3">
                    <Badge>Disponible para trabajar</Badge>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Summary source={mdxSource} />
          <SocialIcons />
        </div>
      </IntersectionSwap>
      <div className="mt-24 space-y-8">
        <Experiences />
        <Projects />
        <Posts />
      </div>
    </HomeLayout>
  );
}
