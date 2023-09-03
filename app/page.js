'use client';

import Image from 'next/image';
import Header from './components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <aside className="relative overflow-visible h-full">
          <div className="sticky top-0 block">
            <div className="py-14 flex flex-col">
              <h1 className="font-bold text-3xl md:text-5xl mb-1 text-black dark:text-white lg:ml-[-2px]">
                Derian Pinto
              </h1>
              <h2 className="text-neutral-700 dark:text-neutral-400 font-semibold mb-4">
                Desarrollador FullStack
              </h2>
              <p className="prose prose-neutral dark:prose-invert">
                Busco desafíos para crecer profesionalmente y colaborar en
                proyectos web sólidos.
              </p>
            </div>
          </div>
        </aside>
        <div className="info-content flex flex-col gap-4 py-14">
          <section className="description prose prose-neutral dark:prose-invert">
            <p>
              Soy un apasionado desarrollador de software especializado en
              tecnologías avanzadas como Git, React, Node, Typescript, Tailwind
              y PHP. Con amplia experiencia en la creación de aplicaciones web
              sólidas y eficientes, me destaco por mi enfoque en la calidad del
              código.
            </p>
            <p>
              Si estás buscando elevar tus proyectos al siguiente nivel, de
              contribuir con mi experiencia y entusiasmo.
            </p>
          </section>
          <section className="experiences">
            <div className="flex flex-col gap-4">
              <div className="experience flex flex-row gap-4">
                <Image
                  className="w-10 h-10"
                  src="https://media.licdn.com/dms/image/C4E0BAQF9sb4qBxMzRQ/company-logo_100_100-alternative/0/1630642344776/diario_el_universo_logo?e=1701302400&v=beta&t=feNsogSkDkHA1Mp6UcwwAa5FtGjS9gAYuyArEM6fUOo"
                  alt="demo"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-2">
                  <span>otc. 2020 - sep-2020</span>
                  <p>
                    Desarrollo de componentes en React con ARC PUBLISHING para
                    eluniverso.com Creación de micrositios con Next.js y
                    tailwindcss Adaptación de componentes con tailwindcss para
                    mejorar la experiencia de usuario Implementación de
                    metodología SCRUM para el despliegue de tareas Configuración
                    y mantenimiento de servidores utilizando Nginx Migración de
                    sitios web a Digital Ocean para mejorar la escalabilidad y
                    eficiencia Integración de DoubleClick for Publishers (DFP)
                    con Piano y mantenimiento de módulos publicitarios
                    Desarrollo de APIs con Express, Typescript, Jest, Husky y
                    Prettier Implementación de Directus Headles CMS para
                    optimizar los procesos empresariales de la compañía
                  </p>
                  <div className="flex flex-row gap-2">
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="experience flex flex-row gap-4">
                <Image
                  className="w-10 h-10"
                  src="https://media.licdn.com/dms/image/C4E0BAQF9sb4qBxMzRQ/company-logo_100_100-alternative/0/1630642344776/diario_el_universo_logo?e=1701302400&v=beta&t=feNsogSkDkHA1Mp6UcwwAa5FtGjS9gAYuyArEM6fUOo"
                  alt="demo"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-2">
                  <span>otc. 2020 - sep-2020</span>
                  <p>
                    Desarrollo de componentes en React con ARC PUBLISHING para
                    eluniverso.com Creación de micrositios con Next.js y
                    tailwindcss Adaptación de componentes con tailwindcss para
                    mejorar la experiencia de usuario Implementación de
                    metodología SCRUM para el despliegue de tareas Configuración
                    y mantenimiento de servidores utilizando Nginx Migración de
                    sitios web a Digital Ocean para mejorar la escalabilidad y
                    eficiencia Integración de DoubleClick for Publishers (DFP)
                    con Piano y mantenimiento de módulos publicitarios
                    Desarrollo de APIs con Express, Typescript, Jest, Husky y
                    Prettier Implementación de Directus Headles CMS para
                    optimizar los procesos empresariales de la compañía
                  </p>
                  <div className="flex flex-row gap-2">
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="experience flex flex-row gap-4">
                <Image
                  className="w-10 h-10"
                  src="https://media.licdn.com/dms/image/C4E0BAQF9sb4qBxMzRQ/company-logo_100_100-alternative/0/1630642344776/diario_el_universo_logo?e=1701302400&v=beta&t=feNsogSkDkHA1Mp6UcwwAa5FtGjS9gAYuyArEM6fUOo"
                  alt="demo"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-2">
                  <span>otc. 2020 - sep-2020</span>
                  <p>
                    Desarrollo de componentes en React con ARC PUBLISHING para
                    eluniverso.com Creación de micrositios con Next.js y
                    tailwindcss Adaptación de componentes con tailwindcss para
                    mejorar la experiencia de usuario Implementación de
                    metodología SCRUM para el despliegue de tareas Configuración
                    y mantenimiento de servidores utilizando Nginx Migración de
                    sitios web a Digital Ocean para mejorar la escalabilidad y
                    eficiencia Integración de DoubleClick for Publishers (DFP)
                    con Piano y mantenimiento de módulos publicitarios
                    Desarrollo de APIs con Express, Typescript, Jest, Husky y
                    Prettier Implementación de Directus Headles CMS para
                    optimizar los procesos empresariales de la compañía
                  </p>
                  <div className="flex flex-row gap-2">
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="experience flex flex-row gap-4">
                <Image
                  className="w-10 h-10"
                  src="https://media.licdn.com/dms/image/C4E0BAQF9sb4qBxMzRQ/company-logo_100_100-alternative/0/1630642344776/diario_el_universo_logo?e=1701302400&v=beta&t=feNsogSkDkHA1Mp6UcwwAa5FtGjS9gAYuyArEM6fUOo"
                  alt="demo"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-2">
                  <span>otc. 2020 - sep-2020</span>
                  <p>
                    Desarrollo de componentes en React con ARC PUBLISHING para
                    eluniverso.com Creación de micrositios con Next.js y
                    tailwindcss Adaptación de componentes con tailwindcss para
                    mejorar la experiencia de usuario Implementación de
                    metodología SCRUM para el despliegue de tareas Configuración
                    y mantenimiento de servidores utilizando Nginx Migración de
                    sitios web a Digital Ocean para mejorar la escalabilidad y
                    eficiencia Integración de DoubleClick for Publishers (DFP)
                    con Piano y mantenimiento de módulos publicitarios
                    Desarrollo de APIs con Express, Typescript, Jest, Husky y
                    Prettier Implementación de Directus Headles CMS para
                    optimizar los procesos empresariales de la compañía
                  </p>
                  <div className="flex flex-row gap-2">
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="experience flex flex-row gap-4">
                <Image
                  className="w-10 h-10"
                  src="https://media.licdn.com/dms/image/C4E0BAQF9sb4qBxMzRQ/company-logo_100_100-alternative/0/1630642344776/diario_el_universo_logo?e=1701302400&v=beta&t=feNsogSkDkHA1Mp6UcwwAa5FtGjS9gAYuyArEM6fUOo"
                  alt="demo"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-2">
                  <span>otc. 2020 - sep-2020</span>
                  <p>
                    Desarrollo de componentes en React con ARC PUBLISHING para
                    eluniverso.com Creación de micrositios con Next.js y
                    tailwindcss Adaptación de componentes con tailwindcss para
                    mejorar la experiencia de usuario Implementación de
                    metodología SCRUM para el despliegue de tareas Configuración
                    y mantenimiento de servidores utilizando Nginx Migración de
                    sitios web a Digital Ocean para mejorar la escalabilidad y
                    eficiencia Integración de DoubleClick for Publishers (DFP)
                    con Piano y mantenimiento de módulos publicitarios
                    Desarrollo de APIs con Express, Typescript, Jest, Husky y
                    Prettier Implementación de Directus Headles CMS para
                    optimizar los procesos empresariales de la compañía
                  </p>
                  <div className="flex flex-row gap-2">
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                    <a className="aptitude" href="#">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
