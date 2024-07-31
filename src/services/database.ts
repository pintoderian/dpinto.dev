import { createReader, Entry } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { notFound } from "next/navigation";

const reader = createReader(process.cwd(), keystaticConfig);

export type ProjectProps = Entry<
  (typeof keystaticConfig)["collections"]["projects"]
>;

export type ProjectAllProps = {
  slug: string;
  entry: ProjectProps;
};

export type ExperienceProps = Entry<
  (typeof keystaticConfig)["collections"]["experiences"]
>;

export type ExperienceAllProps = {
  slug: string;
  entry: ExperienceProps;
};

export type PostProps = Entry<(typeof keystaticConfig)["collections"]["posts"]>;

export type PostAllProps = {
  slug: string;
  entry: PostProps;
};

type SettingProps = Entry<(typeof keystaticConfig)["singletons"]["settings"]>;

export async function getProjects({
  limit
}: {
  limit?: number;
}): Promise<ProjectAllProps[] | null> {
  const data = await reader.collections.projects.all();

  const projects = data.sort(
    (a, b) =>
      new Date(b.entry.dateCreated).getTime() -
      new Date(a.entry.dateCreated).getTime()
  );

  if (limit) {
    return projects.slice(0, limit);
  }

  return projects;
}

export async function getExperiences({
  limit
}: {
  limit?: number;
} = {}): Promise<ExperienceAllProps[] | null> {
  const data = await reader.collections.experiences.all();

  const experiences = data.sort(
    (a, b) =>
      new Date(b.entry.dateStart).getTime() -
      new Date(a.entry.dateStart).getTime()
  );

  if (limit) {
    return experiences.slice(0, limit);
  }

  return experiences;
}

export async function getPosts({
  limit
}: {
  limit?: number;
} = {}): Promise<PostAllProps[] | null> {
  const data = await reader.collections.posts.all();

  const posts = data.sort(
    (a, b) =>
      new Date(b.entry.dateCreated).getTime() -
      new Date(a.entry.dateCreated).getTime()
  );

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export async function getDynamicData({
  category,
  slug
}: {
  category?: string;
  slug?: string;
}) {
  if (!category || !slug) {
    notFound();
  }

  if (category === "experiencia") {
    const experiences = await getExperiences();
    const searchExperience = experiences?.find(
      (experience) => experience.slug === slug
    );
    return searchExperience
      ? {
          title: searchExperience.entry.company,
          summary: `Experiencia de trabajo en ${searchExperience.entry.company}`,
          date: searchExperience.entry.dateStart,
          customDate: searchExperience.entry.dateRange,
          image: null,
          content: searchExperience.entry.content
        }
      : null;
  }

  if (category === "blog") {
    const posts = await getPosts();
    const searchPost = posts?.find((post) => post.slug === slug);
    return searchPost
      ? {
          title: searchPost.entry.title,
          date: searchPost.entry.dateCreated,
          customDate: null,
          summary: searchPost.entry.summary,
          image: searchPost.entry.image,
          content: searchPost.entry.content
        }
      : null;
  }

  return null;
}

export async function getSettings(): Promise<SettingProps | null> {
  const setting = await reader.singletons.settings.read();
  return setting;
}
