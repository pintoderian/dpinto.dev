import Image from "next/image";

export default function ImagePost({ url, alt }: { url: string; alt: string }) {
  return (
    <picture className="relative w-full h-40 pt-[52.5%]">
      <Image
        className="object-contain"
        src={url}
        alt={alt}
        fill={true}
        quality={90}
        loading="lazy"
      />
    </picture>
  );
}
