import { serialize } from "@/lib/mdx-serializer";
import { getDynamicData } from "@/services/database";
import { notFound } from "next/navigation";
import ContentPreview from "./content-preview";
import HomeLayout from "@/components/layouts/home";

export type DynamicParams = {
  filters: ["proyecto" | "blog" | "experiencia", string?, string?] | undefined;
};

export default async function DynamicPage({
  params
}: {
  params: DynamicParams;
}) {
  const { filters } = params;
  const category = filters?.[0] || "";
  const slug = filters?.[1] || "";

  const data = await getDynamicData({ category, slug });
  const content = await data?.content();

  if (!data && !content) {
    notFound();
  }
  const headings: any = [];
  const source = await serialize({
    source: content ?? "",
    scope: { headings }
  });

  return (
    <ContentPreview
      title={data?.title}
      date={data?.date}
      headings={headings}
      source={source}
    />
  );
}
