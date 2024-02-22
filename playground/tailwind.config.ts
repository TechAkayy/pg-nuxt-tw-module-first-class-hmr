import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";
import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from "./themes/pg-tailwindcss/tokens.cjs";

export default {
  theme: {
    extend: {
      colors: {
        ...pg_colors,
        pp: pg_colors.primary,
        primary: { 600: "red" },
      },
      // colors: {
      //   brand: colors.teal['500']
      // },
      fontFamily: {
        sans: "Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif",
      },
    },
  },
  plugins: [typography()],
};
