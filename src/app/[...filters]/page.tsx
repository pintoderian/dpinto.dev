import { serialize } from "@/lib/mdx-serializer";
import { getDynamicData } from "@/services/database";
import { notFound } from "next/navigation";
import ContentPreview from "./content-preview";
import { getParams } from "@/lib/dynamic-pages";
import { Metadata } from "next";

export type DynamicParams = {
  filters: ["proyecto" | "blog" | "experiencia", string?, string?] | undefined;
};

export const generateStaticParams = async () => {
  const dataSlugs = await getParams();
  return dataSlugs;
};

export async function generateMetadata({
  params
}: {
  params: DynamicParams;
}): Promise<Metadata> {
  const { filters } = params;
  const category = filters?.[0] || "";
  const slug = filters?.[1] || "";

  const data = await getDynamicData({ category, slug });

  if (!data) {
    notFound();
  }

  const url = `/${category}/${slug}`;

  return {
    title: data.title,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      url,
      images: `/og?title=${encodeURIComponent(data.title)}`
    }
  };
}

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
      image={data?.image}
      date={data?.date}
      customDate={data?.customDate}
      headings={headings}
      source={source}
    />
  );
}
