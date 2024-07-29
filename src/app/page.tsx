import Badge from "@/components/badge";
import Experiences from "@/components/experiences";
import { Header } from "@/components/header";
import { Nav } from "@/components/header/nav";
import { IntersectionSwap } from "@/components/intersection-swap";
import HomeLayout from "@/components/layouts/home";
import Posts from "@/components/posts";
import { ProfileImageLarge } from "@/components/profile-image";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <HomeLayout>
      <IntersectionSwap nav={<Header />}>
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <ProfileImageLarge />

            <div className="mt-2 relative">
              <h1 className="text-3xl font-semibold leading-none text-blue-100/90">
                <span>Derian Pinto</span>
              </h1>
              <h2 className="mt-2 items-center space-y-2 text-lg font-medium leading-none text-blue-100/50 lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2">
                <div className="whitespace-nowrap py-1">
                  Desarrollador Full Stack
                </div>
                <Badge>Disponible para trabajar</Badge>
              </h2>
            </div>
          </div>
          <p className="text-xl text-blue-100/90 [&>b]:text-blue-600 [&>b]:font-semibold">
            +6 años de experiencia.{" "}
            <b>Ingeniero de Sistemas y Desarrollador Full Stack</b> de Ecuador
            🇪🇨. Especializado en el desarrollo de aplicaciones web únicas.
          </p>
          <Nav />
        </div>
      </IntersectionSwap>
      <div className="mt-24 space-y-8">
        <Projects />
        <Experiences />
        <Posts />
      </div>
    </HomeLayout>
  );
}
