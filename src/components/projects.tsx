import { getProjects } from "@/services/database";
import Image from "next/image";
import Link from "next/link";
import Subtitle from "./subtitle";

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
                          className="rounded-lg"
                          loading="eager"
                          src={image}
                          width={475}
                          height={265}
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
