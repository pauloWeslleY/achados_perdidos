import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { fonts } from "./fonts";
import { semanticTokens, tokens as tokenColors } from "./tokens";

const themeConfig = defineConfig({
  globalCss: {
    "*::-webkit-scrollbar": {
      width: "2",
    },
    "*::-webkit-scrollbar-track": {
      background: "whiteAlpha.900",
    },
    "*::-webkit-scrollbar-thumb": {
      background: "sky.500",
      borderRadius: "xl",
    },

    body: {
      "--webkit-font-smoothing": "antialiased",
      textRendering: "optimizeLegibility",
      display: "flex",
      flexDir: "column",
    },

    "html, body": {
      h: "full",
      bgGradient: "to-r",
      gradientFrom: "sky.300",
      gradientTo: "sky.500",
    },
  },
  theme: {
    tokens: {
      colors: tokenColors,
      fonts,
    },
    semanticTokens: {
      colors: semanticTokens,
    },
  },
});

const theme = createSystem(defaultConfig, themeConfig);

export default theme;
