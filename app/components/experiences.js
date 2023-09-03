'use client';

import Image from 'next/image';

const Experiences = () => {
  return (
    <section id="experience">
      <div className="title font-bold text-2xl text-black dark:text-white my-5">
        Demo
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
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
              eluniverso.com Creación de micrositios con Next.js y tailwindcss
              Adaptación de componentes con tailwindcss para mejorar la
              experiencia de usuario Implementación de metodología SCRUM para el
              despliegue de tareas Configuración y mantenimiento de servidores
              utilizando Nginx Migración de sitios web a Digital Ocean para
              mejorar la escalabilidad y eficiencia Integración de DoubleClick
              for Publishers (DFP) con Piano y mantenimiento de módulos
              publicitarios Desarrollo de APIs con Express, Typescript, Jest,
              Husky y Prettier Implementación de Directus Headles CMS para
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
        <div className="flex flex-row gap-4">
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
              eluniverso.com Creación de micrositios con Next.js y tailwindcss
              Adaptación de componentes con tailwindcss para mejorar la
              experiencia de usuario Implementación de metodología SCRUM para el
              despliegue de tareas Configuración y mantenimiento de servidores
              utilizando Nginx Migración de sitios web a Digital Ocean para
              mejorar la escalabilidad y eficiencia Integración de DoubleClick
              for Publishers (DFP) con Piano y mantenimiento de módulos
              publicitarios Desarrollo de APIs con Express, Typescript, Jest,
              Husky y Prettier Implementación de Directus Headles CMS para
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
  );
};

export default Experiences;
