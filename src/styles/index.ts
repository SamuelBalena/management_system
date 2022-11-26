import { createStitches } from "@stitches/react";

export const { css, styled, globalCss, keyframes, getCssText } = createStitches(
  {
    theme: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#F7F9F9",
        green: "#4db6ac",
        blue: "#6480DE",
      },
    },

    media: {
      sm: "(max-width: 320px)",
      md: "(max-width: 375px)",
      lg: "(max-width: 520px)",
      tablet: "(max-width: 768px)",
      laptop: "(max-width: 1024px)",
      desktop: "(max-width: 1440px)",
      widescreen: "(max-width: 1920px)",
    },
  }
);
