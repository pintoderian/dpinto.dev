import { getProjects } from "@/services/database";
import Image from "next/image";
import Link from "next/link";
import Subtitle from "./subtitle";
import { IconArrow } from "./icons";

export default async function Projects() {
  const projects = await getProjects({ limit: 2 });

  return (
    <>
      <Subtitle text="Proyectos" />
      <div className="flex flex-col md:flex-row gap-y-16 md:gap-x-8">
        {Array.isArray(projects) &&
          projects?.map((project, index) => {
            const { title, image, tags } = project.entry;

            return (
              <article
                className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
                key={`project-${index}`}
              >
                <div className="hover:scale-[1.03] cursor-pointer transition-all ease-in-out duration-200">
                  <Link title={title} href={`/proyecto/${project.slug}`}>
                    <div className="overflow-hidden">
                      {image && (
                        <Image
                          alt={`Imagen de ${title}`}
                          className="rounded-lg object-cover max-h-[171px]"
                          loading="lazy"
                          src={image}
                          width={304}
                          height={171}
                        />
                      )}
                      <div className="py-4 tracking-wide flex justify-between items-center">
                        <div>
                          <h3 className="text-base md:text-lg text-blue-100/90 font-medium mb-1">
                            {title}
                          </h3>
                          <div className="flex flex-row flex-wrap gap-1.5 text-xs">
                            {tags?.map((tag, index) => {
                              return (
                                <span
                                  key={`tag-${index}`}
                                  className="bg-white/5 rounded px-2 py-1 capitalize"
                                >
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <IconArrow />
                      </div>
                    </div>
                  </Link>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
}
