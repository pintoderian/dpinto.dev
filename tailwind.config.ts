import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
const { fontFamily } = defaultTheme;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/content/posts/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.stone
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        holimount: ["var(--font-holimount)"]
      },
      typography: {}
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }: { addBase: any; theme: any }) {
      addBase({
        ".layout-sm": {
          "grid-template-columns": `1fr min(${theme("screens.sm")},100%) 1fr`
        },
        ".layout-xl": {
          "grid-template-columns": `1fr minmax(auto,${theme(
            "spacing.60"
          )}) min(${theme("screens.sm")},100%) minmax(auto,${theme(
            "spacing.60"
          )}) 1fr`
        }
      });
    }),
    typography
  ]
};
export default config;
