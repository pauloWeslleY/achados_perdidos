import { defineSemanticTokens } from "@chakra-ui/react";

export const semanticTokens = defineSemanticTokens.colors({
  sky: {
    contrast: {
      value: {
        _light: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        _light: "{colors.sky.700}",
        _dark: "{colors.sky.300}",
      },
    },
    subtle: {
      value: {
        _light: "{colors.sky.100}",
        _dark: "{colors.sky.900}",
      },
    },
    muted: {
      value: {
        _light: "{colors.sky.200}",
        _dark: "{colors.sky.800}",
      },
    },
    emphasized: {
      value: {
        _light: "{colors.sky.300}",
        _dark: "{colors.sky.700}",
      },
    },
    solid: {
      value: {
        _light: "{colors.sky.600}",
        _dark: "{colors.sky.600}",
      },
    },
    focusRing: {
      value: {
        _light: "{colors.sky.600}",
        _dark: "{colors.sky.600}",
      },
    },
  },
});
