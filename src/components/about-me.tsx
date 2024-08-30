import { getSettings } from "@/services/database";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import Summary from "./summary";
import { calculateAge } from "@/lib/utils";

export default async function AboutMe() {
  const setting = await getSettings();
  const about = await setting?.about();
  const birthdate = setting?.birthdate
    ? calculateAge(setting?.birthdate)?.toString()
    : "";
  const renderSummary = about?.replace(":birthdate:", birthdate);
  const mdxSource = await serialize(renderSummary ?? "");

  return (
    <article
      id="about"
      className="flex flex-col lg:flex-row gap-8 border-t border-blue-100/20 pt-12"
    >
      <div className="w-full lg:w-8/12 order-2 lg:order-1">
        <Summary className="text-base lg:pt-4" source={mdxSource} />
      </div>
      <div className="w-full lg:w-4/12 order-1 lg:order-2">
        {setting?.aboutImage && (
          <div className="flex justify-center w-full lg:mb-12">
            <Image
              style={{ objectPosition: "50% 50%" }}
              className="object-cover w-64 h-full p-1 contrast-75 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-blue-500/5 ring-1 ring-blue-100/20 "
              src={setting?.aboutImage}
              alt="Derian Pinto"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
}
