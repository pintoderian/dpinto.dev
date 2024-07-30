import { IconEU, IconEcuavisa, IconOrodelti, IconSVT } from "./icons";
import {
  CommandLineIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/solid";
import Subtitle from "./subtitle";
import { getExperiences } from "@/services/database";
import Link from "next/link";

const icons: {
  [key: string]: () => JSX.Element;
} = {
  eluniverso: () => <IconEU />,
  ecuavisa: () => <IconEcuavisa />,
  svt: () => <IconSVT />,
  orodelti: () => <IconOrodelti />,
  codegea: () => <CommandLineIcon className="fill-white w-8 mx-auto" />,
  freelance: () => <CubeTransparentIcon className="fill-white w-8 mx-auto" />
};

export default async function Experiences() {
  const experiences = await getExperiences({});

  return (
    <div className="experiences">
      <Subtitle text="Experiencia" />
      <div className="space-y-6">
        {experiences?.map((experience, index) => {
          const { company, job, icon, dateRange } = experience.entry;
          const Icon = icons[icon];

          return (
            <Link
              className="block group overflow-hidden rounded-lg bg-white/5 p-5 md:p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              key={`experience-${index}`}
              href={`/experiencia/${experience.slug}`}
            >
              <div className="flex flex-row gap-x-4">
                <div className="w-[12%] md:w-1/12">
                  <div className="flex items-center w-[45px] h-[45px] bg-neutral-900 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-900/60 ring-2 ring-blue-400/20">
                    <Icon />
                  </div>
                </div>
                <div className="w-[88%] md:w-11/12">
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-base md:text-lg text-blue-100/90">
                        {job}
                      </h3>
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
                    <div className="flex flex-row space-x-4 divide-x-2 divide-blue-200/20 items-center text-sm">
                      <span>{company}</span>
                      <span className="text-xs px-4">{dateRange}</span>
                    </div>
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
