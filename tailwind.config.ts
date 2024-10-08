import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-orange": "var(--soft-orange)",
        "soft-red": "var(--soft-red)",
        "off-white": "var(--off-white)",
        "grayish-blue": "var(--grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "very-dark-blue": "var(--very-dark-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
