export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "";

export const IS_SANDBOX = process.env.NODE_ENV === "development";

export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70`;

export const LINK_STYLES = `text-blue-200 underline decoration-blue-200/20 underline-offset-2 transition-all hover:text-blue-100 hover:decoration-blue-100/40`;

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-blue-300/30 hover:underline-offset-2 hover:text-blue-200/90`;

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-blue-100/0 hover:before:text-blue-200/50 pl-[1em] -ml-[1em]`;

export const OOF_GRAD = `bg-gradient-to-br from-blue-200 to-blue-200/30 bg-clip-text text-transparent`;
