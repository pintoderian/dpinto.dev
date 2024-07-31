import { getExperiences, getPosts } from "@/services/database";

export const getParams = async () => {
  const posts = (await getPosts()) ?? [];
  const experiences = (await getExperiences()) ?? [];

  return [
    ...posts.map((post) => ({ filters: ["blog", post.slug] })),
    ...experiences.map((experience) => ({
      filters: ["experiencia", experience.slug]
    }))
  ];
};
