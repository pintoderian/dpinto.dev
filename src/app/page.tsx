"use client";

import { Fragment } from "react";
import SectionContainer from "./components/section-container";
import Hero from "./components/hero";
import {
  IconBriefcase,
  IconSourceCode,
  IconUserSquareRounded
} from "@tabler/icons-react";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { useTranslate } from "@/hooks/useTranslate";

export default function Home() {
  const { translateArray } = useTranslate();
  const keywords = ["experience", "project", "about"];
  const [experience, project, about] = translateArray(keywords);

  return (
    <Fragment>
      <SectionContainer className="py-16 md:py-36">
        <Hero />
      </SectionContainer>
      <div className="space-y-24">
        <SectionContainer id="experience">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <IconBriefcase size={30} />
            {experience}
          </h2>
          <Experience />
        </SectionContainer>
        <SectionContainer id="project">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <IconSourceCode size={30} />
            {project}
          </h2>
          <Projects />
        </SectionContainer>

        <SectionContainer id="about">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
            <IconUserSquareRounded size={30} />
            {about}
          </h2>
          <AboutMe />
        </SectionContainer>
      </div>
    </Fragment>
  );
}
