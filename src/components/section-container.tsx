import { classnames } from "@/utils/classnames";

export default function SectionContainer({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      {...props}
      className={classnames(
        "section w-full mx-auto container lg:max-w-4xl md:max-w-2xl",
        props.className
      )}
    >
      {children}
    </section>
  );
}
