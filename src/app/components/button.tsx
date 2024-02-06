import { classnames } from "@/utils/classnames";

interface CommonButtonProps {
  children: React.ReactNode;
  variant?: string;
  asLink?: boolean;
}

type ButtonProps = CommonButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  variant = "primary",
  asLink = false,
  ...props
}: ButtonProps | AnchorProps) {
  const variantClasses: { [key: string]: string } = {
    primary:
      "bg-gray-100 rounded-full dark:bg-purple-900 border border-gray-200 dark:border-purple-600 py-2 px-4 text-base hover:ring-1 ring-gray-300 dark:ring-purple-800 transition-all",
    ghost: "transition-all hover:opactity-80"
  };

  const isAnchor = "href" in props;

  if (isAnchor) {
    const { href, ...rest } = props;
    return (
      <a
        href={href}
        {...(rest as AnchorProps)}
        className={classnames(
          "flex flex-row gap-2 items-center text-gray-600 dark:text-white",
          variantClasses[variant] ?? "",
          props.className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as ButtonProps)}
      className={classnames(variantClasses[variant] ?? "", props.className)}
    >
      {children}
    </button>
  );
}
